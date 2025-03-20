import Resource from "../components/Resource";

export default function Home() {
  return (
    <main className="container">
      <p className="title">Welcome to the Library Management Web App! </p>
      <p className="subtitle">
        Choose one of the following options to start managing your library:
      </p>
      <div className="grid-container">
        <Resource
          img="/src/images/add-image.png"
          route="/add"
          operation="Add"
        />
        <Resource
          img="/src/images/get-image.jpg"
          route="/get"
          operation="Get"
        />
        <Resource
          img="/src/images/update-image.png"
          route="/update"
          operation="Update"
        />
        <Resource
          img="/src/images/delete-image.png"
          route="/delete"
          operation="Delete"
        />
      </div>
    </main>
  );
}
