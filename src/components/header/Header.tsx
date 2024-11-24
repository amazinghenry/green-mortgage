import "./Header.css";
import headerImage from "../../assets/greenmortgage-header-image.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="container headerGridContainer">
        <div>
          <h1 className="headerTitle1">
            Find the right loan to create your perfect home
          </h1>
          <h2 className="headerTitle2">
            Experience clarity, connection and simplicity all the way to your
            new doorstep.
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
