import "./GetStarted.css";

const GetStartedRibbon = () => {
  return (
    <div className="getStartedRibbonContainer container-fluid">
      <div className="getStartedGroup container">
        <h4>Get to Know Us</h4>
        <p>
          Owning a home should be easy, and at Green Mortgage , we make that
          possible. Our Mortgage Solutions are designed to help aspiring
          homeowners secure property with affordable financing, hassle-free
          applications, and faster approvals.
        </p>

        <p>
          Backed by exclusive partnerships, a commitment to customer
          satisfaction, and a team of experts dedicated to guiding you, we are
          committed to providing a smooth and transparent mortgage process that
          suits your needs.
        </p>

        <a href="/mortgage-calculator" className="getStartedButton">
          Your journey to owning a home starts here!
        </a>
      </div>
    </div>
  );
};

export default GetStartedRibbon;
