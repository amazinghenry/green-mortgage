import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MortgageCalculator = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("Employed");
  const [propertyCost, setPropertyCost] = useState("");
  const [equity, setEquity] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [period, setPeriod] = useState(12);
  const [fundingSource, setFundingSource] = useState("FHF");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [monthlySalary, setMonthlySalary] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [dob, setDob] = useState("");
  const [qualificationStatus, setQualificationStatus] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handlePropertyCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const cost = Number(e.target.value.replace(/,/g, ""));
    const value = e.target.value.replace(/,/g, "");

    if (value === "") {
      setPropertyCost("");
      setEquity(0);
      setPrincipal(0);
      return;
    }

    const cost = Number(value);
    if (isNaN(cost) || cost <= 0) {
      setError("Please enter a valid property cost.");
      return;
    }

    setError(null);
    setPropertyCost(cost.toString());

    // if (isNaN(cost) || cost <= 0) {
    //   setError("Please enter a valid property cost.");
    //   return;
    // }
    const equityPercentage = fundingSource === "PMI" ? 0.3 : 0.1;
    const calculatedEquity = cost * equityPercentage;
    const calculatedPrincipal = cost - calculatedEquity;

    // setPropertyCost(cost);
    setEquity(calculatedEquity);
    setPrincipal(calculatedPrincipal);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMonthlySalary(value === "" ? "" : value);
  };

  const handleOtherIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOtherIncome(value === "" ? "" : value);
  };

  const validateInput = () => {
    if (!dob) {
      setError("Please enter a valid date of birth.");
      return false;
    }

    if (fundingSource === "FHF" && principal >= 70000000) {
      setError("FHF funding is only available for loans less than 70 million.");
      return false;
    }
    if (fundingSource === "PMI" && principal < 70000000) {
      setError(
        "PMI funding is only available for loans greater than 70 million."
      );
      return false;
    }

    // Validate age and loan tenor
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    // if (
    //   currentDate < new Date(birthDate.setFullYear(currentDate.getFullYear()))
    // ) {
    //   setError("Invalid date of birth.");
    //   return false;
    // }

    const loanTenorYears = period / 12;

    if (age >= 60) {
      setError("Applicant's age must be below 60 years to qualify.");
      return false;
    }
    if (loanTenorYears > 20) {
      setError("Loan tenor cannot exceed 20 years.");
      return false;
    }

    setError(null);
    return true;
  };

  const calculatePMT = () => {
    if (!validateInput()) return;

    const interestRate = fundingSource === "FHF" ? 0.162 : 0.285;
    const monthlyRate = interestRate / 12;

    const pmt =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -period));

    setMonthlyPayment(pmt);

    const totalIncome = Number(monthlySalary) + Number(otherIncome);
    const qualification1 = (pmt / totalIncome) * 100;
    setQualificationStatus(
      qualification1 > 40
        ? "Not Qualified (PMT-to-Income above 40%)"
        : "Qualified"
    );

    let qualificationMsg = "Qualified";
    if (qualification1 > 40) {
      qualificationMsg = "Not Qualified (PMT-to-Income above 40%)";
    }
    setQualificationStatus(qualificationMsg);

    // google sheets
  };

  const handleFundingSourceChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFundingSource(e.target.value);
    handlePropertyCostChange({
      target: { value: propertyCost.toString() },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mortgage Calculator</h2>
      {/* Full Name */}
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Employment Status */}
      <div className="mb-3">
        <label className="form-label">Employment Status</label>
        <select
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
          className="form-select"
        >
          <option value="Employed">Employed</option>
          <option value="Self-Employed">Self-Employed</option>
          <option value="Unemployed">Unemployed</option>
        </select>
      </div>

      {/* Funding Source */}
      <div className="mb-3">
        <label className="form-label">Funding Source</label>
        <select
          value={fundingSource}
          onChange={handleFundingSourceChange}
          className="form-select"
        >
          <option value="FHF">FHF </option> {/* 16.2% Interest */}
          <option value="PMI">PMI </option> {/* 28.5% Interest */}
        </select>
      </div>

      {/* Property Cost */}
      <div className="mb-3">
        <label className="form-label">Property Cost</label>
        <input
          inputMode="numeric"
          value={propertyCost}
          onChange={handlePropertyCostChange}
          className="form-control"
        />
      </div>

      {/* Display Calculated Equity */}
      <div className="mb-3">
        <label className="form-label">
          Equity ({fundingSource === "PMI" ? "30%" : "10%"} of Property Cost)
        </label>
        <input
          type="text"
          value={equity.toLocaleString()}
          className="form-control"
          disabled
        />
      </div>

      {/* Display Calculated Principal Loan Amount */}
      <div className="mb-3">
        <label className="form-label">Principal Loan Amount</label>
        <input
          type="text"
          value={principal.toLocaleString()}
          className="form-control"
          disabled
        />
      </div>

      {/* Monthly Salary */}
      <div className="mb-3">
        <label className="form-label">Monthly Salary</label>
        <input
          inputMode="numeric"
          value={monthlySalary}
          onChange={handleSalaryChange}
          className="form-control"
        />
      </div>

      {/* Other Income */}
      <div className="mb-3">
        <label className="form-label">Other Monthly Income</label>
        <input
          inputMode="numeric"
          value={otherIncome}
          onChange={handleOtherIncomeChange}
          className="form-control"
        />
      </div>

      {/* Loan Period */}
      {/* Loan Period (Slider) */}
      <div className="mb-3">
        <label className="form-label">Loan Period (Months): {period}</label>
        <input
          type="range"
          min="0"
          max="240"
          step="1"
          value={period}
          onChange={(e) => setPeriod(Number(e.target.value))}
          className="form-range"
        />
      </div>

      {/* calculate button */}
      {error && <div className="alert alert-danger">{error}</div>}
      <button onClick={calculatePMT} className="btn btn-primary w-100">
        Calculate
      </button>
      {monthlyPayment !== null && !error && (
        <div className="alert alert-success mt-4" role="alert">
          <strong>Monthly Payment:</strong>₦{monthlyPayment.toLocaleString()}
        </div>
      )}
      {qualificationStatus && (
        <div
          className={`alert mt-4 ${
            qualificationStatus.includes("Not")
              ? "alert-danger"
              : "alert-success"
          }`}
          role="alert"
        >
          <strong>Qualification Status:</strong> {qualificationStatus}
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
