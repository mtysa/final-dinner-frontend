import "./Preloader.css";
import { Link } from "react-router-dom";

function Preloader() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <div className="circle-preloader"></div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Preloader;
