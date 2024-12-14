import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-print.svg";
import Navigation from "../Navigation/Navigation";

function Header({ handleRegisterClick, handleLoginClick }) {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/final-dinner-frontend/">
          <img src={logo} alt="dinnertime logo" className="header__logo" />{" "}
        </Link>
      </div>
      <div className="header__essentials">
        <Navigation />
        <div className="header__auth">
          <button className="header__register" onClick={handleRegisterClick}>
            Sign Up
          </button>
          <button className="header__login" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
