import React from "react";
import TextAreaField from "../../inputs/InputTextAreaField";
import RadioField from "../../inputs/InputRadioField";
import ArrayField from "../../inputs/InputArrayField";
import InputField from "../../inputs/InputField";

// Function to select the right field type
export default function FieldRenderer({
  field,
  arrayFields,
  handleArrayFieldChange,
  addArrayField,
  removeArrayField,
}) {
  switch (field.type) {
    case "array":
      return (
        <label key={field.id}>
          {field.label}
          <ArrayField
            field={field}
            arrayValues={arrayFields[field.name]}
            onChange={handleArrayFieldChange}
            onAdd={addArrayField}
            onRemove={removeArrayField}
          />
        </label>
      );
    case "textArea":
      return (
        <label key={field.id}>
          {field.label}
          <TextAreaField field={field} />{" "}
        </label>
      );
    case "info":
      return (
        <p key={field.id} className="info-detail">
          {field.info}
        </p>
      );
    case "updateInfo":
      return (
        <p key={field.id} className="update-info-detail">
          {field.info}
        </p>
      );
    case "radio":
      return (
        <fieldset key={field.id}>
          <legend>{field.label}</legend>
          <RadioField field={field} />
        </fieldset>
      );
    default:
      return (
        <label key={field.id}>
          {field.label}
          <InputField field={field} />
        </label>
      );
  }
}
