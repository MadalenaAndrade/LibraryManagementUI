import ResourceForm from "./ResourceForm";
import React from "react";

export default function ResourceOptions(props) {
  // state/function to control form display
  const [showForm, setShowForm] = React.useState(false);

  function displayForm() {
    setShowForm((prevState) => !prevState);
  }

  return (
    <section className="item">
      <img src={props.src} alt={props.alt} className="resource-image" />
      <button onClick={displayForm} className="button">
        {props.resource}
      </button>
      {showForm && <ResourceForm type={props.type} resource={props.resource} />}
    </section>
  );
}
