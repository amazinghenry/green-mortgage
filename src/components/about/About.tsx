import "./About.css";
import devices from "../../assets/greenmortgage-responsive.webp";

const About = () => {
  return (
    <div className="container aboutContainer">
      <h2>An easier way to feel at home</h2>
      <p>
        At Green Mortgage, we do more than just loans – we care. With us, you’re
        our priority. We understand the complexities of purchasing a home so
        that we can simplify your journey and navigate you on an easier,
        stress-free route.
      </p>
      <a href="#" className="aboutButton">
        START THE PROCESS
      </a>
      <img src={devices} alt={devices} className="img-fluid" />
    </div>
  );
};

export default About;
