import React from "react";
import Author from "../../config/author";
import Book from "../../config/book";
import BookCopy from "../../config/bookCopy";
import Category from "../../config/category";
import Client from "../../config/client";
import Publisher from "../../config/publisher";
import Rent from "../../config/rent";
import RentReception from "../../config/rentReception";
import TextAreaField from "../inputs/InputTextAreaField";
import RadioField from "../inputs/InputRadioField";
import ArrayField from "../inputs/InputArrayField";
import InputField from "../inputs/InputField";
import { useArrayFields } from "../../hooks/useArrayFields";
import { formatFormData } from "../../utils/formUtils";
import { usePostResource } from "../../hooks/useAddResource";

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
      <fieldset>
        <legend key={field.id}>{field.label}</legend>
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
  function handleSubmit(event) {
    event.preventDefault(); //page reloads by default, so it is prevented
    const formEl = event.currentTarget;
    const formData = new FormData(formEl); //create set of form data element

    formEl.reset(); // erases info on form after submission
    clearArrayFields(); //function from useArrayFields to clear info

    const data = formatFormData(formData); //function to format data in case of fields with array, to follow my POST documentation of Library API
    console.log(data);

    // Api requests
    const { postData } = usePostResource(props.resource);

    if (props.type === "add") {
      postData(data);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map(renderField)}
      <button className="submit-button">Submit</button>
    </form>
  );
}
