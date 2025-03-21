import ResourceOptions from "../components/ResourceOptions";

export default function AddResource() {
  return (
    <main>
      <p className="title">Add Resource</p>
      <p className="subtitle">Choose one of the following resourced to add:</p>

      <ResourceOptions
        src="/src/images/author-icon.png"
        alt="Author icon"
        resource="Author"
      />
      <ResourceOptions
        src="/src/images/book-icon.png"
        alt="Book icon"
        resource="Book"
      />
      <ResourceOptions
        src="/src/images/book-copy-icon.png"
        alt="Book copy icon"
        resource="BookCopy"
      />
      <ResourceOptions
        src="/src/images/category-icon.png"
        alt="Category icon"
        resource="Category"
      />
      <ResourceOptions
        src="/src/images/client-icon.png"
        alt="Client icon"
        resource="Client"
      />
      <ResourceOptions
        src="/src/images/publisher-icon.png"
        alt="Publisher icon"
        resource="Publisher"
      />
      <ResourceOptions
        src="/src/images/rent-icon.png"
        alt="Rent icon"
        resource="Rent"
      />
      <ResourceOptions
        src="/src/images/rent-reception-icon.png"
        alt="Rent reception Icon"
        resource="RentReception"
      />
    </main>
  );
}
