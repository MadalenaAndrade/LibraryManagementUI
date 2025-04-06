import ResourceOptions from "../components/ResourceOptions";

export default function DeleteResource() {
  return (
    <main>
      <p className="title">Delete Resource</p>
      <p className="subtitle">
        Choose one of the following resources to delete:
      </p>

      <div className="resource-container">
        <ResourceOptions
          src="/src/images/author-icon.png"
          alt="Author icon"
          resource="Author"
          type="delete"
        />
        <ResourceOptions
          src="/src/images/book-icon.png"
          alt="Book icon"
          resource="Book"
          type="delete"
        />
        <ResourceOptions
          src="/src/images/book-copy-icon.png"
          alt="Book copy icon"
          resource="BookCopy"
          type="delete"
        />
        <ResourceOptions
          src="/src/images/category-icon.png"
          alt="Category icon"
          resource="Category"
          type="delete"
        />
        <ResourceOptions
          src="/src/images/client-icon.png"
          alt="Client icon"
          resource="Client"
          type="delete"
        />
        <ResourceOptions
          src="/src/images/publisher-icon.png"
          alt="Publisher icon"
          resource="Publisher"
          type="delete"
        />
      </div>
    </main>
  );
}
