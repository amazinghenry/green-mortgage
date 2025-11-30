import "./Footer.css";
import greenMortgageBlackLogo from "../../assets/greenmortgagelogoblack.png";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mortgage-calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/journalist-application">Journalist Application</Link>
            </li>
            <li>
              <Link to="/mortgage-checklistandconsentform">
                Checklist & Consent Form
              </Link>
            </li>
            <li>
              <Link to="/submit-documents">Submit Documents</Link>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:09112941135">09112941135</a>
            </li>
            <li>
              Mainland Office: 7b Prince Bode Oluwo Street, Maryland, Lagos
            </li>
            <li>
              Island Office: 28 Daniyan Natalia Street Off Adebayo Dorothy
              Street, Lekki Phase 1, Lagos
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Let's Connect</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/green.mortgage/?igsh=MWw3dnV6ZWxqbG91&utm_source=ig_contact_invite#">
                Follow us on Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1EJPw8Kh4V/">
                Follow us on Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/green-mortgageng/">
                Follow us on LinkedIn
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
