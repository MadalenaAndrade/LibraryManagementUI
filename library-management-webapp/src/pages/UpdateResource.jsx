import ResourceOptions from "../components/ResourceOptions";

export default function UpdateResource() {
  return (
    <main>
      <p className="title">Update Resource</p>
      <p className="subtitle">
        Choose one of the following resources to update:
      </p>

      <div className="resource-container">
        <ResourceOptions
          src="/src/images/author-icon.png"
          alt="Author icon"
          resource="Author"
          type="update"
        />
        <ResourceOptions
          src="/src/images/book-icon.png"
          alt="Book icon"
          resource="Book"
          type="update"
        />
        <ResourceOptions
          src="/src/images/book-copy-icon.png"
          alt="Book copy icon"
          resource="BookCopy"
          type="update"
        />
        <ResourceOptions
          src="/src/images/category-icon.png"
          alt="Category icon"
          resource="Category"
          type="update"
        />
        <ResourceOptions
          src="/src/images/client-icon.png"
          alt="Client icon"
          resource="Client"
          type="update"
        />
        <ResourceOptions
          src="/src/images/publisher-icon.png"
          alt="Publisher icon"
          resource="Publisher"
          type="update"
        />
      </div>
    </main>
  );
}
