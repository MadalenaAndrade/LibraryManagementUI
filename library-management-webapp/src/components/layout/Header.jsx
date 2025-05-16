import { Link } from "react-router-dom";
import libraryIcon from "../../images/library-icon.png";

export default function Header() {
  return (
    <header>
      <Link to="/" className="header-link">
        <img src={libraryIcon} alt="Library logo" />
        <h1>LibraryManagementApp</h1>
      </Link>
    </header>
  );
}
