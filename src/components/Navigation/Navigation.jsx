import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const customClassName = ({ isActive }) =>
    "nav__link" + (isActive ? " nav__link_active" : "");

  return (
    <nav className="nav">
      <NavLink to="/final-dinner-frontend/" className={customClassName}>
        Home
      </NavLink>
    </nav>
  );
}

export default Navigation;
