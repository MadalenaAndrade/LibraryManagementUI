import { useState, useEffect, useRef } from "react"; // useEffect and useRef to close menu if clicked outside nabvar
import NavBar from "./NavBar";
import { FaBars } from "react-icons/fa"; // For hamburger icon, needs to install

// Component that enables two type of navigation menus depending on the size of the window
export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); //refs menu

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // function to menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        <nav className="mobile-nav" ref={menuRef}>
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
