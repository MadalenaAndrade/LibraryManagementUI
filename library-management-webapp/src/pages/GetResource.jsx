import ResourceOptions from "../components/resource/ResourceOptions";

export default function GetResource() {
  return (
    <main>
      <p className="title">Get Resource</p>
      <p className="subtitle">Choose one of the following resources to get:</p>

      <div className="resource-container">
        <ResourceOptions
          src="/src/images/author-icon.png"
          alt="Author icon"
          resource="Author"
          type="get"
        />
        <ResourceOptions
          src="/src/images/book-icon.png"
          alt="Book icon"
          resource="Book"
          type="get"
        />
        <ResourceOptions
          src="/src/images/book-copy-icon.png"
          alt="Book copy icon"
          resource="BookCopy"
          type="get"
        />
        <ResourceOptions
          src="/src/images/category-icon.png"
          alt="Category icon"
          resource="Category"
          type="get"
        />
        <ResourceOptions
          src="/src/images/client-icon.png"
          alt="Client icon"
          resource="Client"
          type="get"
        />
        <ResourceOptions
          src="/src/images/publisher-icon.png"
          alt="Publisher icon"
          resource="Publisher"
          type="get"
        />
        <ResourceOptions
          src="/src/images/rent-icon.png"
          alt="Rent icon"
          resource="Rent"
          type="get"
        />
        <ResourceOptions
          src="/src/images/rent-reception-icon.png"
          alt="Rent reception Icon"
          resource="RentReception"
          type="get"
        />
      </div>
    </main>
  );
}
