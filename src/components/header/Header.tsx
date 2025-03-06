import "./Header.css";
import headerImage from "../../assets/greenmortgage-header-image.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="container headerGridContainer">
        <div>
          <h1 className="headerTitle1">Did you know?</h1>
          <h2 className="headerTitle2">
            Over 80% of Nigerians rely on personal savings or earnings to
            finance home purchases due to the low penetration of mortgage
            financing in the country.
          </h2>
          <Link to="/mortgage-calculator" className="applyButton">
            APPLY NOW
          </Link>
        </div>
        <img src={headerImage} alt="" className="img-fluid headerImage" />
      </div>
    </header>
  );
};

export default Header;
