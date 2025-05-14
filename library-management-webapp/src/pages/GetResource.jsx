import ResourceOptions from "../components/forms/ResourceOptions";
import authorIcon from "../images/author-icon.png";
import bookIcon from "../images/book-icon.png";
import bookCopyIcon from "../images/book-copy-icon.png";
import categoryIcon from "../images/category-icon.png";
import clientIcon from "../images/client-icon.png";
import publisherIcon from "../images/publisher-icon.png";
import rentIcon from "../images/rent-icon.png";
import rentReceptionIcon from "../images/rent-reception-icon.png";

export default function GetResource() {
  return (
    <main>
      <p className="title">Get Resource</p>
      <p className="subtitle">Choose one of the following resources to get:</p>

      <div className="resource-container">
        <ResourceOptions
          src={authorIcon}
          alt="Author icon"
          resource="Author"
          type="get"
        />
        <ResourceOptions
          src={bookIcon}
          alt="Book icon"
          resource="Book"
          type="get"
        />
        <ResourceOptions
          src={bookCopyIcon}
          alt="Book copy icon"
          resource="BookCopy"
          type="get"
        />
        <ResourceOptions
          src={categoryIcon}
          alt="Category icon"
          resource="Category"
          type="get"
        />
        <ResourceOptions
          src={clientIcon}
          alt="Client icon"
          resource="Client"
          type="get"
        />
        <ResourceOptions
          src={publisherIcon}
          alt="Publisher icon"
          resource="Publisher"
          type="get"
        />
        <ResourceOptions
          src={rentIcon}
          alt="Rent icon"
          resource="Rent"
          type="get"
        />
        <ResourceOptions
          src={rentReceptionIcon}
          alt="Rent reception Icon"
          resource="RentReception"
          type="get"
        />
      </div>
    </main>
  );
}
