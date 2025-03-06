import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./GreenCalculator.css";

const MortgageCalculator: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState<string>("");
  const [dob, setDob] = useState<Date | null>(null);
  const [email, setEmail] = useState<string>("");
  const [employmentStatus, setEmploymentStatus] = useState<string>("Employed");
  const [company, setCompany] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [yearlyNetIncome, setYearlyNetIncome] = useState<number | "">("");

  const [loanAmount, setLoanAmount] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState<number | "">("");
  const [loanTerm, setLoanTerm] = useState<number>(10); // Default loan term of 10 years
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [qualificationRemark, setQualificationRemark] = useState<string | null>(
    null
  );

  // Calculate Age from DOB
  const calculateAge = () => {
    if (!dob) return null;
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age >= 0 ? age : null;
  };

  // Move to Next Step
  const handleNext = () => {
    if (step === 1) {
      if (
        fullName.trim() === "" ||
        email.trim() === "" ||
        !dob ||
        calculateAge() === null ||
        yearlyNetIncome === ""
      ) {
        alert("Please fill in all required fields correctly.");
        return;
      }
    }
    if (step === 2) {
      if (loanAmount === "" || interestRate === "" || loanTerm < 1) {
        alert("Please complete all financial details before proceeding.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  // Move Back
  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  // Handle Submit (Calculate Mortgage & Loan Qualification)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const monthlyRate = Number(interestRate) / 100 / 12;
    const numberOfPayments = Number(loanTerm) * 12;

    let payment = 0;
    if (monthlyRate === 0) {
      payment = Number(loanAmount) / numberOfPayments;
    } else {
      payment =
        (Number(loanAmount) *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    setMonthlyPayment(payment);

    const yearlyIncome = Number(yearlyNetIncome);
    const dti = (payment * 12) / yearlyIncome;

    if (dti < 0.43) {
      setQualificationRemark("Qualified");
    } else {
      setQualificationRemark("Not Qualified");
    }

    setTimeout(() => setStep(3), 100);
  };

  // Reset Form
  const resetCalculator = () => {
    setFullName("");
    setDob(null);
    setEmail("");
    setEmploymentStatus("Employed");
    setCompany("");
    setPosition("");
    setYearlyNetIncome("");
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm(10);
    setMonthlyPayment(null);
    setQualificationRemark(null);
    setStep(1);
  };

  return (
    <div className="mortgageCalculatorContainer container">
      <h1>Mortgage Calculator</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="stepContainer">
            <h2>Step 1: Personal & Employment Details</h2>
            <div>
              <label>Full Name:</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Date of Birth:</label> <br />
              <DatePicker
                selected={dob}
                onChange={(date: Date | null) => setDob(date)}
                dateFormat="dd/MM/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
                placeholderText="dd/mm/yyyy"
                required
              />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Employment Status:</label> <br />
              <select
                className="form-select mb-3"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
              >
                <option>Employed</option>
                <option>Self-Employed</option>
                <option>Unemployed</option>
                <option>Retired</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Company Name:</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter company name"
              />
            </div>

            <div className="mb-3">
              <label>Position:</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter position"
              />
            </div>
            <div className="mb-3">
              <label>Yearly Net Income:</label>
              <input
                type="number"
                value={yearlyNetIncome}
                onChange={(e) =>
                  setYearlyNetIncome(Number(e.target.value) || "")
                }
                placeholder="Enter yearly net income"
                required
              />
            </div>
            <button type="button" className="nextButton" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="stepContainer">
            <h2>Step 2: Financial Details</h2>
            <div>
              <label>Loan Amount:</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value) || "")}
                required
              />
            </div>
            <div>
              <label>Interest Rate (%):</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value) || "")}
                required
              />
            </div>
            <div>
              <label>Loan Term (Years):</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value) || 1)}
                min="1"
                max="30"
                required
              />
            </div>
            <button type="button" className="backButton" onClick={handleBack}>
              Back
            </button>
            <button type="submit" className="calculateButton">
              Calculate
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="stepContainer resultContainer">
            <h2>Results</h2>
            <p>
              <strong>Name:</strong> {fullName}
            </p>
            <p>
              <strong>Age:</strong> {calculateAge()} years
            </p>
            <p>
              <strong>Employment Status:</strong> {employmentStatus}
            </p>
            <p>
              <strong>Company:</strong> {company}
            </p>
            <p>
              <strong>Position:</strong> {position}
            </p>
            <p>
              <strong>Loan Duration:</strong> {loanTerm} years
            </p>
            <p>
              <strong>Estimated Monthly Payment:</strong> &#8358;
              {monthlyPayment ? monthlyPayment.toFixed(2) : "0"}
            </p>
            <p>
              <strong>Qualification Status:</strong> {qualificationRemark}
            </p>
            <button type="button" className="backButton" onClick={handleBack}>
              Back
            </button>
            <button
              type="button"
              className="resetButton"
              onClick={resetCalculator}
            >
              Reset
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MortgageCalculator;
