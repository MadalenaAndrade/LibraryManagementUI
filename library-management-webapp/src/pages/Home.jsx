import ResourceButton from "../components/resource/ResourceButton";

export default function Home() {
  return (
    <main>
      <p className="title">Welcome to the Library Management Web App! </p>
      <p className="subtitle">
        Choose one of the following options to start managing your library:
      </p>
      <div className="grid-container">
        <ResourceButton
          img="/src/images/add-image.png"
          route="/add"
          operation="Add"
        />
        <ResourceButton
          img="/src/images/get-image.png"
          route="/get"
          operation="Get"
        />
        <ResourceButton
          img="/src/images/update-image.png"
          route="/update"
          operation="Update"
        />
        <ResourceButton
          img="/src/images/delete-image.png"
          route="/delete"
          operation="Delete"
        />
      </div>
    </main>
  );
}
