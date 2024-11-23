import "./Testimonial.css";
import testimonialImage1 from "../../assets/testimonialimage1.webp";

const Testimonial = () => {
  return (
    <div className="testimonialContainer container">
      <div className="testimonialGroup">
        <div className="testimonialItem testimonialImageContainer">
          <img
            src={testimonialImage1}
            alt={testimonialImage1}
            className="img-fluid testimonialImage"
          />
          <p className="testimonialFullName"> Kelvin Smith </p>
        </div>
        <div className="testimonialItem">
          <h2>What our clients are saying</h2>
          <p className="testimonialText">
            " As a retired civil servant we have bought and sold many houses
            through the years. Green Mortgage was, by far, the best lender with
            which we have ever worked. I’d buy another house just to work with
            them again! Professional, very knowledgeable, always available and
            very thoughtful. Thank you Imelda and the GreenMortgage team! "
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
