import React from "react";
import Author from "../config/author";
import Book from "../config/book";
import BookCopy from "../config/bookCopy";
import Category from "../config/category";

import TextAreaField from "./InputTextAreaField";
import RadioField from "./InputRadioField";

import ArrayField from "./InputArrayField";
import InputField from "./InputField";

export default function ResourceForm(props) {
  const resourceConfigs = { Author, Book, BookCopy, Category };

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

  return (
    <form className="form">
      {fields.map(renderField)}
      <button className="submit-button">Submit</button>
    </form>
  );
}
