import "./About.css";
import devices from "../../assets/greenmortgage-responsive.webp";

const About = () => {
  return (
    <div className="container aboutContainer">
      <img src={devices} alt={devices} className="img-fluid" />
      <div>
        <h2>What is Green Mortgage?</h2>
        <p>
          High interest rates, limited access to long-term funds, and tough
          eligibility criteria have made mortgages less accessible to many
          aspiring homeowners. However, with innovative mortgage products like
          Green Mortgage, owning your dream home is now easier than ever!
        </p>

        <p>Our mortgage product is designed to offer:</p>
        <ul>
          <li>
            <span className="bold-list">Competitive Interest Rates</span> –
            Enjoy affordable rates that make homeownership within
          </li>
          <li>
            <span className="bold-list"> Payment Options </span> – Choose a
            repayment plan that suits your financial situation.
          </li>
          <li>
            <span className="bold-list"> Easy Application Process </span> – Get
            started with less paperwork and no complicated procedures
          </li>
          <li>
            <span className="bold-list">Faster Approval Time </span> – Get your
            mortgage approved in no time, so you can move into your dream home
            sooner.
          </li>
          <li>
            <span className="bold-list">Exclusive Partnerships </span> – Access
            special deals and discounts from our trusted real estate partners.
          </li>
        </ul>

        <a href="/mortgage-calculator" className="aboutButton">
          START THE PROCESS
        </a>
      </div>
    </div>
  );
};

export default About;
