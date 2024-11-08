import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const customClassName = ({ isActive }) =>
    "nav__link" + (isActive ? " nav__link_active" : "");

  return (
    <nav className="nav">
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/saved-recipes" className={customClassName}>
        Saved Recipes
      </NavLink>
    </nav>
  );
}

export default Navigation;
