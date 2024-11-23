import "./howItWorks.css";
import illustration1 from "../../assets/illustration1.webp";
import illustration2 from "../../assets/illustration2.webp";
import illustration3 from "../../assets/illustration3.webp";

const HowItWorks = () => {
  return (
    <div className="container-fluid howItWorksBg">
      <div className="howItWorksContainer container">
        <h2>How does it work?</h2>

        <div className="howGroup">
          <div className="howItem">
            <img
              src={illustration1}
              alt={illustration1}
              className="img-fluid"
            />
            <h5>1. Apply Online</h5>
            <p>Take a few minutes to get started</p>
          </div>
          <div className="howItem">
            <img
              src={illustration2}
              alt={illustration2}
              className="img-fluid"
            />
            <h5>2. Link and Verify documents</h5>
            <p>Share the necessary forms and we will handle the rest</p>
          </div>
          <div className="howItem">
            <img
              src={illustration3}
              alt={illustration3}
              className="img-fluid"
            />
            <h5>3. Move into your home</h5>
            <p>Get your funding within 5 - 7days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
