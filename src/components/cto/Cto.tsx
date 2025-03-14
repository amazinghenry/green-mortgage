import "./Cto.css";
import cloudImage from "../../assets/cloud-image.webp";

const Cto = () => {
  return (
    <div className="cto-container">
      <div className="container cto">
        <img src={cloudImage} alt="cloud-image" className="img-fluid" />
        <p>
          You are a few steps away from owning your dream home. With our easy
          upload options , you can send in all the paperwork for your mortgage
          processing in one place. Enjoy premium service, faster response time,
          with loan approval 4 weeks after this.
        </p>
        <p>
          Enjoy premium service, faster response time, and loan approval 4 weeks
          after submission of documents.
        </p>
        <a href="/submit-documents" className="submit-document-btn">
          Submit Document
        </a>
      </div>
    </div>
  );
};

export default Cto;
