import "./Footer.css";
import greenMortgageBlackLogo from "../../assets/greenmortgage-logo-black.webp";

const Footer = () => {
  const thisYear = new Date();

  return (
    <footer className="footer container">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Our Pages</h3>
          <ul>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Tools</h3>
          <ul>
            <li>
              <a href="#">Calculator</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Let's Connect</h3>
          <ul>
            <li>
              <a href="tel:2486867270">248-686-7270</a>
            </li>
            <li>6755 Telegraph Rd Suite 330, Bloomfield Hills, MI 48301</li>
            <li>
              <a href="#">Follow us on Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <img
            src={greenMortgageBlackLogo}
            className="img-fluid"
            alt="Green Mortgage Logo"
          />
        </div>
      </div>
      <div className="footer-note">
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
