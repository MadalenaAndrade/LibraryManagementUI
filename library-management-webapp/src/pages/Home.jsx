import ResourceButton from "../components/forms/ResourceButton";
import addImage from "../images/add-image.png";
import getImage from "../images/get-image.png";
import updateImage from "../images/update-image.png";
import deleteImage from "../images/delete-image.png";

export default function Home() {
  return (
    <main>
      <p className="title">Welcome to the Library Management Web App! </p>
      <p className="subtitle">
        Choose one of the following options to start managing your library:
      </p>
      <div className="grid-container">
        <ResourceButton img={addImage} route="/add" operation="Add" />
        <ResourceButton img={getImage} route="/get" operation="Get" />
        <ResourceButton img={updateImage} route="/update" operation="Update" />
        <ResourceButton img={deleteImage} route="/delete" operation="Delete" />
      </div>
    </main>
  );
}
