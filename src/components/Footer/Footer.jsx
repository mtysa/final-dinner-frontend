import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__author">
        &copy; 2024 Developed by Mustafa Ysa, Powered by Spoonacular API
      </p>
      <div className="footer__links-container">
        <a
          className="footer__link"
          href="https://tripleten.com"
          target="_blank"
        >
          TripleTen
        </a>
        <a
          href="https://github.com/mtysa"
          className="footer__link"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-ysa-33728a105/"
          className="footer__link"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
