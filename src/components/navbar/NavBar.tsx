import "./Navbar.css";
import gmLogo from "../../assets/gm-logo.webp";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <a href="/">
          <img src={gmLogo} alt="Logo" className=" logo img-fluid" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
