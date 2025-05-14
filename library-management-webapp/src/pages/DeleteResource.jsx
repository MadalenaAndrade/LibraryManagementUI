import ResourceOptions from "../components/forms/ResourceOptions";
import authorIcon from "../images/author-icon.png";
import bookIcon from "../images/book-icon.png";
import bookCopyIcon from "../images/book-copy-icon.png";
import categoryIcon from "../images/category-icon.png";
import clientIcon from "../images/client-icon.png";
import publisherIcon from "../images/publisher-icon.png";

export default function DeleteResource() {
  return (
    <main>
      <p className="title">Delete Resource</p>
      <p className="subtitle">
        Choose one of the following resources to delete:
      </p>

      <div className="resource-container">
        <ResourceOptions
          src={authorIcon}
          alt="Author icon"
          resource="Author"
          type="delete"
        />
        <ResourceOptions
          src={bookIcon}
          alt="Book icon"
          resource="Book"
          type="delete"
        />
        <ResourceOptions
          src={bookCopyIcon}
          alt="Book copy icon"
          resource="BookCopy"
          type="delete"
        />
        <ResourceOptions
          src={categoryIcon}
          alt="Category icon"
          resource="Category"
          type="delete"
        />
        <ResourceOptions
          src={clientIcon}
          alt="Client icon"
          resource="Client"
          type="delete"
        />
        <ResourceOptions
          src={publisherIcon}
          alt="Publisher icon"
          resource="Publisher"
          type="delete"
        />
      </div>
    </main>
  );
}
