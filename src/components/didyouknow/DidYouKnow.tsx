import "./DidYouKnow.css";
import homeOwner from "../../assets/homeowner.webp";

const DidYouKnow = () => {
  return (
    <div className="didYouKnowContainer container-fluid">
      <div className="container didYouKnowGroup">
        <div className="didYouKnowItem">
          <h2>Did you know?</h2>
          <h3>
            Approximately 33% of all home buyers in 2021 were first-time buyers
          </h3>
          <p>
            Whether you’re just starting the search or browsing for new
            financial investments, our team goes Simply Mortgage to help you
            achieve your goals with ease.
          </p>
          <a href="#" className="didYouKnowButton">
            GET TO KNOW US
          </a>
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
