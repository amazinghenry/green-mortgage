import "./notFound.css";
import { Link } from "react-router-dom";

const noPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default noPage;
