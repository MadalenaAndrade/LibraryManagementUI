import { useState } from "react";
import NavBar from "./NavBar";
import { FaBars } from "react-icons/fa"; // for hamburger icon, needs to install

// component that enables two type of navigation menus depending on the size of the window

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="nav-wrapper">
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>

      <nav className="desktop-nav">
        <ul>
          <NavBar path="/" text="Home" />
          <NavBar path="/add" text="Add Resource" />
          <NavBar path="/get" text="Get Resource" />
          <NavBar path="/update" text="Update Resource" />
          <NavBar path="/delete" text="Delete Resource" />
          <NavBar path="/about" text="About" />
          <NavBar path="/contact" text="Contact" />
        </ul>
      </nav>

      {isOpen && (
        <nav className="mobile-nav">
          <ul onClick={closeMenu}>
            <NavBar path="/" text="Home" />
            <NavBar path="/add" text="Add Resource" />
            <NavBar path="/get" text="Get Resource" />
            <NavBar path="/update" text="Update Resource" />
            <NavBar path="/delete" text="Delete Resource" />
            <NavBar path="/about" text="About" />
            <NavBar path="/contact" text="Contact" />
          </ul>
        </nav>
      )}
    </div>
  );
}
