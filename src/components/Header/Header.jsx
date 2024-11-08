import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-print.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img src={logo} alt="dinnertime logo" className="header__logo" />{" "}
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
