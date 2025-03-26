import React from "react";
import "./MortgageChecklist.css";
import gmLogo from "../../assets/greenmortgagelogoblack.png";
import greenmortgagechecklist from "../../assets/greenmortgagechecklist.pdf";

const MortgageChecklist: React.FC = () => {
  return (
    <div className="container mortgage-checklist print-container">
      <img src={gmLogo} alt="GM Logo" className="gm-logo img-fluid" />

      <div className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Consent & Checklist Form</h1>
        <p className="mb-2">Please find required documents:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Loan application letter and completed application form</li>
          <li>Account opening form and account opening fees (₦295,000)</li>
          <li>BVN</li>
          <li>Appointment letter/Last promotion letter</li>
          <li>Valid means of ID and company ID</li>
          <li>Letter of introduction from HR/Employment Letter</li>
          <li>P45 and P60 (diaspora clients)</li>
          <li>Sales offer letter from Vendor to you</li>
          <li>Approved building plan</li>
          <li>Property Title Document</li>
          <li>Property pictures and location</li>
          <li>Pay slip for 6 months</li>
          <li>
            Evidence of equity (Account statement showing all transfers to the
            developer) OR Minimum{" "}
            <ul>
              <li>10% equity contribution for FHF</li>
              <li>30% equity contribution for PMI</li>
            </ul>
          </li>
          <li>Salary account statement for 2 years</li>
          <li>Tax clearance card</li>
          <li>7 passport photos (5 by 5)</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">
          Letter of Authority to Debit Account for:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Title search – ₦25,000.00</li>
          <li>Property Valuation – ₦100,000.00</li>
          <li>Verification of title - ₦50,000.00</li>
          <li>Credit Bureau – ₦10,000.00</li>
          <li>Charting fees – ₦30,000.00</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">
          Requirements for Account Opening:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>2 Passport Photographs</li>
          <li>
            Valid ID Card (Driver’s license, National ID, Voter Card, or
            International Passport)
          </li>
          <li>Filled account opening form</li>
          <li>
            Completed 2 reference forms from current account holder with any
            commercial bank not a salary accounts and must not be less than 6
            months old
          </li>
          <li>
            Utility Bill - Waste Management Bill, Water Bill, or Light Bill
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Upfront Fees Required:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Origination: 2% of facility amount (One-off)</li>
          <li>Fire & special peril insurance: 0.15% of property cost yearly</li>
          <li>Mortgage protection insurance: 0.8% of facility amount yearly</li>
          <li>
            Credit life with retrenchment rider insurance for first 12 months
            (0.297%)
          </li>
          <li>
            0.5% Commitment fee = 0.5% flat of facility amount payable upon
            acceptance of offer letter and non-refundable.
          </li>
          <li>
            Cost of title perfection:
            <ul className="list-disc ml-6">
              <li>5% of property value (Lagos and other states in Nigeria)</li>
              <li>10% of property value (FCT & Abuja)</li>
            </ul>
          </li>
          <li>
            Property insurance for first 12 months = 0.15% of the value of the
            property (payable annually)
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Facilitation Fee:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>5% of loan for amount below 70,000,000 Naira</li>
          <li>3% of loan for amount 70,000,000 Naira & above</li>
        </ul>
        <hr />
        <h2 className="text-xl font-semibold mb-2 applicant-details">
          Applicant Details:
        </h2>
        <p>Name of Applicant:</p>
        <p>Property Name/Type:</p>
        <p>Property Location:</p>
        <p>Property Title:</p>
        <p>Cost of Property:</p>
        <p>Loan Amount:</p>
        <p>Date:</p>
        <p>Signature:</p>
        <p>Representative in charge:</p>
      </div>

      <div className="button-container">
        <a
          href={greenmortgagechecklist}
          download="greenmortgagechecklist.pdf"
          className="checklist-download-btn"
        >
          Download & Sign Checklist/Consent Form
        </a>
        <a
          href="https://forms.gle/m6hSnRox8JwuNoLi9"
          className="checklist-submit-btn"
        >
          Upload and Submit Documents
        </a>
      </div>
    </div>
  );
};

export default MortgageChecklist;
