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
import api from "../../api/api";

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

  // Form input states -----------------------------------------------------------------------//
  // fields that will be used corresponding to the recource name and type
  const fields = resourceConfigs[props.resource][props.type];

  // fields of array type (fields are filtered by type and acumulated as objects name: "")
  const defaultArrayFields = fields
    .filter((field) => field.type === "array")
    .reduce((acc, field) => {
      acc[field.name] = [""];
      return acc;
    }, {});

  // state to change arrayFields such as authors and categories in books
  const [arrayFields, setArrayFields] = React.useState(defaultArrayFields);

  function handleArrayFieldChange(fieldName, index, e) {
    const newArrayFields = { ...arrayFields };
    newArrayFields[fieldName][index] = [e.target.value];
    setArrayFields(newArrayFields);
  }

  function addArrayField(fieldName) {
    setArrayFields((prevArray) => ({
      ...prevArray,
      [fieldName]: [...arrayFields[fieldName], ""],
    }));
  }

  function removeArrayField(fieldName, index) {
    const newArrayFields = { ...arrayFields };
    newArrayFields[fieldName].splice(index, 1);
    setArrayFields(newArrayFields);
  }

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

  // "Data treatment" for API-----------------------------------------------------------------------//
  function handleSubmit(event) {
    event.preventDefault(); //page reloads by default, so it is prevented
    const formEl = event.currentTarget;
    const formData = new FormData(formEl); //create set of form data element
    formEl.reset(); // erases info on form after submission

    // clears info on array fields, while leaving the previous number of visible fields
    /// converts the values in the object to "". As it's empty, placeholder appears!
    const clearedArrayFields = {};

    for (const key in arrayFields) {
      clearedArrayFields[key] = arrayFields[key].map(() => "");
    }
    setArrayFields(clearedArrayFields);

    // Adds each formData object in data, but if key already exists it transforms data in array, if there's already an array it adds the new value (for cases as book authors and categories)
    const data = {};

    formData.forEach((value, key) => {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    });

    // formats where fields is array so it's compatible with API format and has subkey
    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key] = data[key].map((item) => ({ name: item }));
      }
    }
    console.log(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map(renderField)}
      <button className="submit-button">Submit</button>
    </form>
  );
}
