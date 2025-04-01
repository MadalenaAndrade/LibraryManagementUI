import ResourceOptions from "../components/ResourceOptions";
import React from "react";

export default function AddResource() {
  return (
    <main>
      <p className="title">Add Resource</p>
      <p className="subtitle">Choose one of the following resources to add:</p>

      <div className="resource-container">
        <ResourceOptions
          src="/src/images/author-icon.png"
          alt="Author icon"
          resource="Author"
          type="add"
        />
        <ResourceOptions
          src="/src/images/book-icon.png"
          alt="Book icon"
          resource="Book"
          type="add"
        />
        <ResourceOptions
          src="/src/images/book-copy-icon.png"
          alt="Book copy icon"
          resource="BookCopy"
          type="add"
        />
        <ResourceOptions
          src="/src/images/category-icon.png"
          alt="Category icon"
          resource="Category"
          type="add"
        />
        <ResourceOptions
          src="/src/images/client-icon.png"
          alt="Client icon"
          resource="Client"
          type="add"
        />
        <ResourceOptions
          src="/src/images/publisher-icon.png"
          alt="Publisher icon"
          resource="Publisher"
          type="add"
        />
        <ResourceOptions
          src="/src/images/rent-icon.png"
          alt="Rent icon"
          resource="Rent"
          type="add"
        />
        <ResourceOptions
          src="/src/images/rent-reception-icon.png"
          alt="Rent reception Icon"
          resource="RentReception"
          type="add"
        />
      </div>
    </main>
  );
}
