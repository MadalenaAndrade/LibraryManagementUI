import React from "react";
import Author from "../../config/resources/author";
import Book from "../../config/resources/book";
import BookCopy from "../../config/resources/bookCopy";
import Category from "../../config/resources/category";
import Client from "../../config/resources/client";
import Publisher from "../../config/resources/publisher";
import Rent from "../../config/resources/rent";
import RentReception from "../../config/resources/rentReception";
import TextAreaField from "../inputs/InputTextAreaField";
import RadioField from "../inputs/InputRadioField";
import ArrayField from "../inputs/InputArrayField";
import InputField from "../inputs/InputField";
import { useArrayFields } from "../../hooks/useArrayFields";
import { formatFormData } from "../../utils/formDataUtils";
import { usePostResource } from "../../hooks/useAddResource";
import { useGetResource } from "../../hooks/useGetResourse";
import { formatRetrievedData } from "../../utils/retrievedDataUtils";

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
  const [retrievedData, setRetrievedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [paginationData, setPaginationData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastQuery, setLastQuery] = React.useState(null);

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

  // Function to select the right field type
  function selectFieldOptions(field) {
    if (field.type === "array") {
      return (
        <ArrayField
          field={field}
          arrayValues={arrayFields[field.name]}
          onChange={handleArrayFieldChange}
          onAdd={addArrayField}
          onRemove={removeArrayField}
        />
      );
    } else if (field.type === "textArea") {
      return <TextAreaField field={field} />;
    } else if (field.type === "info") {
      return <p className="info-detail">{field.info}</p>;
    } else {
      return <InputField field={field} />;
    }
  }

  function renderField(field) {
    return field.type === "radio" ? (
      <fieldset key={field.id}>
        <legend>{field.label}</legend>
        <RadioField field={field} />
      </fieldset>
    ) : (
      <label key={field.id}>
        {field.label}
        {selectFieldOptions(field)}
      </label>
    );
  }

  // "Data treatment" for API//
  async function handleSubmit(event) {
    event.preventDefault(); //page reloads by default, so it is prevented
    const formEl = event.currentTarget;

    setIsLoading(true);

    const formData = new FormData(formEl); //create set of form data element

    formEl.reset(); // erases info on form after submission
    clearArrayFields(); //function from useArrayFields to clear info

    const data = formatFormData(formData, fields); //function to format data in case of fields with array, to follow my POST documentation of Library API

    // Api requests
    try {
      setSuccessMessage("");
      setErrorMessage("");
      await new Promise((resolve) => setTimeout(resolve, 1000)); //Minimum 1s delay to ensure spinner is visible and avoid abrupt user experience.

      if (props.type === "add") {
        const message = await postData(data);
        setSuccessMessage(message);
      }
      if (props.type === "get") {
        const result = await getData(data, 1);

        const formattedResult = formatRetrievedData(props.resource, result);
        setRetrievedData(formattedResult.data);
        setPaginationData(formattedResult.pagination);
        setCurrentPage(1);
        setLastQuery(data);
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

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {fields.map(renderField)}
        <button className="submit-button">
          {isLoading ? (
            <>
              <span className="spinner" /> Working on it...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <div className="submit-information">
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {props.type === "get" && retrievedData && (
          <div className="retrieved-data">
            {retrievedData.length === 0 ? (
              <p className="error-message">{props.resource} not found</p>
            ) : (
              <>
                <h2 className="results-title">Results obtained:</h2>
                {paginationData && paginationData.currentPage && (
                  <div className="pagination-controls">
                    <p>
                      Page {paginationData.currentPage} of{" "}
                      {Math.ceil(paginationData.totalItems / 10)}
                    </p>
                    <button onClick={handlePreviousClick}>Previous</button>
                    <button onClick={handleNextClick}>Next</button>
                  </div>
                )}
                {retrievedData.map((item, index) => (
                  <ul key={index}>
                    {Object.entries(item).map(([label, value]) => (
                      <li key={label}>
                        <strong>{label}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
