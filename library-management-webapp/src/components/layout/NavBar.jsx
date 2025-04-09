import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <li>
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {props.text}
      </NavLink>
    </li>
  );
}
