import "./Navbar.css";
import gmLogo from "../../assets/greenmortgagelogowhite.png";

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
            <a href="/mortgage-calculator">Calculator</a>
          </li>
          <li>
            <a href="/mortgage-checklistandconsentform">
              Checklist/Consent Form
            </a>
          </li>
          <li>
            <a href="/submit-documents">Submit Document</a>
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
