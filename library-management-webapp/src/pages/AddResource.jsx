import ResourceOptions from "../components/ResourceOptions";

export default function AddResource() {
  return (
    <main>
      <p className="title">Add Resource</p>
      <p className="subtitle">Choose one of the following resourced to add:</p>

      <ResourceOptions
        src="/src/images/author-icon.png"
        alt="Author Icon"
        resource="Author"
      />
    </main>
  );
}
