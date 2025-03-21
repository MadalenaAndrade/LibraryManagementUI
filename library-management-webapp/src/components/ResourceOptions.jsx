import ResourceForm from "./ResourceForm";
import { useState } from "react";

export default function ResourceOptions(props) {
  // state to control form display
  const [showForm, setShowForm] = useState(false);

  // function to alter the display of the form
  const handleClick = () => {
    setShowForm(!showForm);
  };

  // placeholders dependent of resource        ---------------------TODO add other entities-------------
  const formFields = {
    Author: [{ placeholder: "Author name" }],
    Book: [{ placeholder: "Serial Number" }, { placeholder: "Title" }],
  };

  return (
    <div className="resource-options">
      <div className="resource-item" onClick={handleClick}>
        <img src={props.src} alt={props.alt} className="icon" />
        <p>{props.resource}</p>
      </div>

      {/* Show input if visible */}
      {showForm && (
        <div className="resourceForm">
          {formFields[props.resource]?.map((field, index) => (
            <ResourceForm key={index} placeholder={field.placeholder} />
          ))}
        </div>
      )}
    </div>
  );
}
