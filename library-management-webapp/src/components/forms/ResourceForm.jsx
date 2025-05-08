import React from "react";
import Author from "../../config/resources/author";
import Book from "../../config/resources/book";
import BookCopy from "../../config/resources/bookCopy";
import Category from "../../config/resources/category";
import Client from "../../config/resources/client";
import Publisher from "../../config/resources/publisher";
import Rent from "../../config/resources/rent";
import RentReception from "../../config/resources/rentReception";
import FieldRenderer from "./subcomponents/FieldRenderer";
import SubmitButton from "./subcomponents/SubmitButton";
import SubmitMessage from "./subcomponents/SubmitMessage";
import RetrievedResults from "./subcomponents/RetrievedResults";
import ConfirmDeleteDialog from "./subcomponents/ConfirmDeleteDialog";
import { useArrayFields } from "../../hooks/useArrayFields";
import { formatFormData } from "../../utils/formDataUtils";
import { usePostResource } from "../../hooks/useAddResource";
import { useGetResource } from "../../hooks/useGetResource";
import { formatRetrievedData } from "../../utils/retrievedDataUtils";
import { useUpdateResource } from "../../hooks/useUpdateResource";
import { useDeleteResource } from "../../hooks/useDeleteResource";

export default function ResourceForm(props) {
  const resourceConfigs = {
    Author,
    Book,
    BookCopy,
    Category,
    Client,
    Publisher,
    Rent,
    RentReception,
  };

  // Hooks for API requests
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { postData } = usePostResource(props.resource);
  const { getData } = useGetResource(props.resource);
  const { putData } = useUpdateResource(props.resource);
  const { filterData, deleteData } = useDeleteResource(props.resource);
  const [retrievedData, setRetrievedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [paginationData, setPaginationData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastQuery, setLastQuery] = React.useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);
  const [deleteConfirmationInfo, setDeleteConfirmationInfo] =
    React.useState("");
  const [deleteFormData, setDeleteFormData] = React.useState(null);

  // Form input states//
  // fields that will be used corresponding to the recource name and type
  const fields = resourceConfigs[props.resource][props.type];

  // fields of array type (fields are filtered by type and acumulated as objects name: "")
  const defaultArrayFields = fields
    .filter((field) => field.type === "array")
    .reduce((acc, field) => {
      acc[field.name] = [""];
      return acc;
    }, {});

  // import state and functions for Array fields (check how to custom hooks on React doc :)!)
  const {
    arrayFields,
    handleArrayFieldChange,
    addArrayField,
    removeArrayField,
    clearArrayFields,
  } = useArrayFields(defaultArrayFields);

  // "Data treatment" for API//
  async function handleSubmit(event) {
    event.preventDefault(); //page reloads by default, so it is prevented
    const formEl = event.currentTarget;

    setIsLoading(true);

    const formData = new FormData(formEl); //create set of form data element

    formEl.reset(); // erases info on form after submission
    clearArrayFields(); //function from useArrayFields to clear info

    const data = formatFormData(formData, fields); //function to format data in case of fields with array, to follow my POST/PUT documentation of Library API

    // Api requests
    try {
      setSuccessMessage("");
      setErrorMessage("");
      await new Promise((resolve) => setTimeout(resolve, 1000)); //Minimum 1s delay to ensure spinner is visible and avoid abrupt user experience.

      switch (props.type) {
        case "add":
          setSuccessMessage(await postData(data));
          break;
        case "get":
          const result = await getData(data, 1);
          const formattedResult = formatRetrievedData(props.resource, result);
          setRetrievedData(formattedResult.data);
          setPaginationData(formattedResult.pagination);
          setCurrentPage(1);
          setLastQuery(data);
          break;
        case "update":
          setSuccessMessage(await putData(data));
          break;
        case "delete":
          const deletedResult = await getData(data);
          const fieldInfo = filterData(deletedResult);
          setDeleteConfirmationInfo(fieldInfo);
          setDeleteFormData(data);
          setShowConfirmDelete(true);
          break;
        default:
          break;
      }
    } catch (error) {
      setErrorMessage(error.message || "Unknown error");
      setRetrievedData(null);
    } finally {
      setIsLoading(false);
    }
  }

  // setup the change of pages in GET requests
  async function handlePageChange(newPage) {
    setIsLoading(true);
    try {
      const result = await getData(lastQuery, newPage);
      const formattedResult = formatRetrievedData(props.resource, result);
      setRetrievedData(formattedResult.data);
      setPaginationData(formattedResult.pagination);
      setCurrentPage(newPage);
    } catch (error) {
      setErrorMessage(error.message || "Error on changing page");
    } finally {
      setIsLoading(false);
    }
  }

  function handlePreviousClick() {
    if (paginationData.currentPage > 1) {
      handlePageChange(paginationData.currentPage - 1);
    }
  }

  function handleNextClick() {
    const totalPages = Math.ceil(paginationData.totalItems / 10);
    if (paginationData.currentPage < totalPages) {
      handlePageChange(paginationData.currentPage + 1);
    }
  }

  async function handleAcceptDelete() {
    setIsLoading(true);
    try {
      const message = await deleteData(deleteFormData);
      setSuccessMessage(message);
    } catch (error) {
      setErrorMessage(error.message || "Error on changing page");
    } finally {
      setShowConfirmDelete(false);
      setIsLoading(false);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FieldRenderer
            key={field.id}
            field={field}
            arrayFields={arrayFields}
            handleArrayFieldChange={handleArrayFieldChange}
            addArrayField={addArrayField}
            removeArrayField={removeArrayField}
          />
        ))}
        <SubmitButton isLoading={isLoading} />
      </form>

      <div className="submit-information">
        <SubmitMessage
          successMessage={successMessage}
          errorMessage={errorMessage}
        />

        {props.type === "get" && retrievedData && (
          <RetrievedResults
            resource={props.resource}
            retrievedData={retrievedData}
            paginationData={paginationData}
            onPrevious={handlePreviousClick}
            onNext={handleNextClick}
          />
        )}

        {showConfirmDelete && (
          <ConfirmDeleteDialog
            resource={props.resource}
            confirmationInfo={deleteConfirmationInfo}
            onConfirm={handleAcceptDelete}
            onCancel={() => setShowConfirmDelete(false)}
          />
        )}
      </div>
    </>
  );
}
