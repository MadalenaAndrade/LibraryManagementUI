import React from "react";
import Author from "../config/author";
import Book from "../config/book";

export default function ResourceForm(props) {
  const resourceConfigs = { Author, Book };
  // fields that will be used corresponding to the recource name and type
  const fields = resourceConfigs[props.resource][props.type];

  const [array, setArray] = React.useState([]); // for user to add more fields in the specific cases

  function toggleButton(field) {
    //setArray(prevArray => [...prevArray, resourceConfigs[] ])
  }

  const formElements = fields.map((field) => (
    <label>
      {field.label}
      {field.type !== "array" && (
        <input
          type={field.type}
          name={field.name}
          pattern={field.pattern ? field.pattern : null}
          min={field.min ? field.min : null}
          max={field.max ? field.max : null}
          maxLength={field.maxLength ? field.maxLength : null}
          step={field.step ? field.step : null}
          title={field.title ? field.title : null}
          required={field.required ? field.required : false}
        />
      )}
      {field.type === "array" && (
        <>
          <input
            type="text"
            name={field.name}
            pattern={field.pattern ? field.pattern : null}
            min={field.min ? field.min : null}
            max={field.max ? field.max : null}
            maxLength={field.maxLength ? field.maxLength : null}
            step={field.step ? field.step : null}
            title={field.title ? field.title : null}
            required={field.required ? field.required : false}
          />
          <button type="button" onClick={}>+</button>
        </>
      )}
    </label>
  ));

  return (
    <form className="form">
      {formElements}
      <button>Submit</button>
    </form>
  );
}
