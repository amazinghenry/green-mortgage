import "./DidYouKnow.css";
import homeOwner from "../../assets/homeowner.webp";

const DidYouKnow = () => {
  return (
    <div className="didYouKnowContainer container-fluid">
      <div className="container didYouKnowGroup">
        <div className="didYouKnowItem">
          <h2>Did you know?</h2>
          <h3>
            Over 90% of homes in Nigeria are self-financed as high interest
            rates, short loan tenures, and a lack of access to long-term funding
            have made it difficult for Nigerians to secure mortgages.
          </h3>
          <p>
            However, solutions like Green Mortgage are solving this problem by
            offering affordable interest rates, flexible repayment plans, and
            faster processing times, making homeownership a reality for more
            Nigerians.
          </p>
        </div>
        <img
          src={homeOwner}
          alt={homeOwner}
          className="img-fluid didYouKnowImage"
        />
      </div>
    </div>
  );
};

export default DidYouKnow;
