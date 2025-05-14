import libraryIcon from "../../images/library-icon.png";

export default function Header() {
  return (
    <header>
      <img src={libraryIcon} alt="Library logo" />
      <h1>LibraryManagementApp</h1>
    </header>
  );
}
