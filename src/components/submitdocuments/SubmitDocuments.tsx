import "./SubmitDocuments.css";
// import cloudImage from "../../assets/cloud-image.webp";
import mortgageChecklistPDF from "../../assets/greenmortgagechecklist.pdf";

const SubmitDocuments = () => {
  return (
    <div className="submit-documents-container container">
      {/* <img
        src={cloudImage}
        alt="Cloud Upload"
        className="img-fluid cloud-image-file"
      /> */}

      <div className="document-submission-content">
        <h1>Have you checked the mortgage calculator? Are you qualified?</h1>

        <div className="document-instructions-group">
          <h2>Please sign the consent and checklist form</h2>
          <a href={mortgageChecklistPDF} className="download-form-button">
            Download Consent Form
          </a>
        </div>

        <div className="document-instructions-list">
          <p>Now upload the following documents:</p>
          <ol>
            <li>Signed consent/checklist form</li>
            <li>Property Survey</li>
            <li>Certificate of Occupancy (C of O) / Governor's Consent</li>
            <li>Property Photograph</li>
            <li>Offer Letter</li>
            <li>National Identification Number (NIN)</li>
            <li>Passport Photographs</li>
            <li>Proof of Payment of Equity Contribution or Initial Deposit</li>
            <li>Birth Certificate or Age Declaration</li>
            <li>
              24-Month Salary Account Statement (for Individuals) or 36-Month
              Business Account Statement (for Self-Employed)
            </li>
          </ol>
        </div>

        <div className="document-upload-buttons">
          <a
            href="https://forms.gle/m6hSnRox8JwuNoLi9"
            className="upload-document-button"
          >
            Upload & Submit Signed Consent & Checklist Form
          </a>
          <a
            href="https://forms.gle/m6hSnRox8JwuNoLi9"
            className="upload-document-button"
          >
            Upload & Submit Supporting Documents
          </a>
        </div>
        <p className="qualification-note">Only for qualified applicants!</p>
      </div>
    </div>
  );
};

export default SubmitDocuments;
