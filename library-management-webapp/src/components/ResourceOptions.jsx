import ResourceForm from "./ResourceForm";
import { useState } from "react";

export default function ResourceOptions(props) {
  // state to control form display
  const [showForm, setShowForm] = useState(false);

  // function to alter the display of the form
  const handleClick = () => {
    setShowForm(!showForm);
  };

  // placeholders dependent of resource
  const formFields = {
    Author: [{ placeholder: "Author name" }],
    Book: [
      { placeholder: "Serial Number" },
      { placeholder: "Title" },
      { placeholder: "Year" },
      { placeholder: "Fine per day" },
      { placeholder: "Publisher name" },
      { placeholder: "Author names" },
      { placeholder: "Category names" },
      { placeholder: "Total amount" },
    ],
    BookCopy: [
      { placeholder: "Serial Number" },
      { placeholder: "Book condition" },
      { placeholder: "Notes" },
    ],
    Category: [{ placeholder: "Category name" }],
    Client: [{ placeholder: "Client name" }],
    Publisher: [{ placeholder: "Publisher name" }],
    Rent: [
      { placeholder: "Client ID" },
      { placeholder: "Client date of birth" },
      { placeholder: "Client NIF" },
      { placeholder: "Client contact" },
      { placeholder: "Client address" },
    ],
    RentReception: [
      { placeholder: "Rent ID" },
      { placeholder: "Return date" },
      { placeholder: "Received condition" },
    ],
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
