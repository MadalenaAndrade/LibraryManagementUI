import ResourceOptions from "../components/forms/ResourceOptions";
import authorIcon from "../images/author-icon.png";
import bookIcon from "../images/book-icon.png";
import bookCopyIcon from "../images/book-copy-icon.png";
import categoryIcon from "../images/category-icon.png";
import clientIcon from "../images/client-icon.png";
import publisherIcon from "../images/publisher-icon.png";

export default function UpdateResource() {
  return (
    <main>
      <p className="title">Update Resource</p>
      <p className="subtitle">
        Choose one of the following resources to update:
      </p>

      <div className="resource-container">
        <ResourceOptions
          src={authorIcon}
          alt="Author icon"
          resource="Author"
          type="update"
        />
        <ResourceOptions
          src={bookIcon}
          alt="Book icon"
          resource="Book"
          type="update"
        />
        <ResourceOptions
          src={bookCopyIcon}
          alt="Book copy icon"
          resource="BookCopy"
          type="update"
        />
        <ResourceOptions
          src={categoryIcon}
          alt="Category icon"
          resource="Category"
          type="update"
        />
        <ResourceOptions
          src={clientIcon}
          alt="Client icon"
          resource="Client"
          type="update"
        />
        <ResourceOptions
          src={publisherIcon}
          alt="Publisher icon"
          resource="Publisher"
          type="update"
        />
      </div>
    </main>
  );
}
