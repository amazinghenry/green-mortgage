import "./Footer.css";
import greenMortgageBlackLogo from "../../assets/gmlogo-black.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const thisYear = new Date();

  return (
    <footer className="footer container">
      <div className="footerContainer">
        <div className="footerSection">
          <h3>Pages</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li> */}
          </ul>
        </div>
        <div className="footerSection">
          <h3>Tools</h3>
          <ul>
            <li>
              <Link to="/mortgage-calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/mortgagechecklist">Check List</Link>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Let's Connect</h3>
          <ul>
            <li>
              <a href="tel:09112941135">09112941135</a>
            </li>
            <li>
              Island Office: 28 Daniyan Natalia Street Off Adebayo Dorothy
              Street, Lekki Phase 1, Lagos
            </li>
            <li>
              Mainland Office: 7b Prince Bode Oluwo Street, Maryland, Lagos
            </li>
            <li>
              <a href="https://www.instagram.com/green.mortgage/?igsh=MWw3dnV6ZWxqbG91&utm_source=ig_contact_invite#">
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footerLogo">
          <img
            src={greenMortgageBlackLogo}
            className="img-fluid"
            alt="Green Mortgage Logo"
          />
        </div>
      </div>
      <div className="footerNote">
        <p>
          For information purposes only. This is not a commitment to lend or
          extend credit. Information and/or dates are subject to change without
          notice. All loans are subject to credit approval.
        </p>
        <p>
          Green Mortgage LLC, NMLS # 210849. Equal Housing Opportunity. &copy;
          {thisYear.getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
