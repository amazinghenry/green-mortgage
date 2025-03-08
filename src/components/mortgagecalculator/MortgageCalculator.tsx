import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MortgageCalculator = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzlpPlvdxGxfpU-pvP5HB_LUN3WX23pmNkKTnq7sFvpaFxIt2vCErLZgk3L68q8bGbQ/exec";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("Employed");
  const [propertyCost, setPropertyCost] = useState("");
  const [equity, setEquity] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [period, setPeriod] = useState(12);
  const [fundingSource, setFundingSource] = useState("FHF");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [monthlySalary, setMonthlySalary] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [qualificationStatus, setQualificationStatus] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  // Funding Source Change
  const handleFundingSourceChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFundingSource = e.target.value;
    setFundingSource(newFundingSource);

    // Delay property cost recalculation until funding source state updates
    setTimeout(() => {
      handlePropertyCostChange({
        target: { value: propertyCost.toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }, 0);
  };

  // Property Cost Change
  const handlePropertyCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const equityPercentage = fundingSource === "PMI" ? 0.3 : 0.1;
    const calculatedEquity = cost * equityPercentage;
    const calculatedPrincipal = cost - calculatedEquity;

    // setPropertyCost(cost);
    setEquity(calculatedEquity);
    setPrincipal(calculatedPrincipal);
  };

  // Salary Change
  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
    if (Number(value) < 0) {
      setError("Salary cannot be negative.");
      return;
    }
    setMonthlySalary(value);
  };

  // Other Income Change
  const handleOtherIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
    if (Number(value) < 0) {
      setError("Other income cannot be negative.");
      return;
    }
    setOtherIncome(value);
  };

  // Validate
  const validateInput = () => {
    setError(null); // ✅ Ensure error is cleared first

    // Ensure property cost and funding source are correctly set before calculation
    handlePropertyCostChange({
      target: { value: propertyCost.toString() },
    } as React.ChangeEvent<HTMLInputElement>);

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

    // Get today's date
    const today = new Date();
    const birthDate = new Date(dob);

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // Age Validation: Minimum 18, Maximum 60
    if (age < 18) {
      setError("Applicant must be at least 18 years old.");
      return false;
    }
    if (age > 60) {
      setError("Applicant's age must be below 60 years to qualify.");
      return false;
    }

    return true;
  };

  const calculatePMT = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInput()) return;

    const interestRate = fundingSource === "FHF" ? 0.162 : 0.285;
    const monthlyRate = interestRate / 12;

    const pmt =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -period));

    setMonthlyPayment(pmt);

    const totalIncome = Number(monthlySalary) + Number(otherIncome);
    const qualification1 = (pmt / totalIncome) * 100;
    const qualificationMsg =
      qualification1 > 40 ? "Not Qualified" : "Qualified";
    setQualificationStatus(qualificationMsg);

    // google sheets
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formData.set("monthlyPayment", pmt.toFixed(2)); // Ensure formatted value
      formData.set("qualificationStatus", qualificationMsg);

      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mortgage Calculator</h2>
      {/* Full Name */}
      <form onSubmit={calculatePMT} ref={formRef} name="submit-to-google-sheet">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
            name="fullName"
            required
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
            name="email"
            required
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
            name="phone"
            required
          />
        </div>

        {/* Date of Birth */}

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              validateInput(); // Validate immediately when the user selects a date
            }}
            // className={`form-control ${error ? "is-invalid" : ""}`}
            className="form-control"
            name="dob"
            required
          />
        </div>
        {error && <div className="invalid-feedback">{error}</div>}

        {/* Employment Status */}
        <div className="mb-3">
          <label className="form-label">Employment Status</label>
          <select
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
            className="form-select"
            name="employmentStatus"
            required
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
            name="fundingSource"
            required
          >
            <option value="FHF">FHF </option> {/* 16.2% Interest */}
            <option value="PMI">PMI </option> {/* 28.5% Interest */}
          </select>
        </div>

        {/* Property Cost */}
        <div className="mb-3">
          <label className="form-label">Property Cost ₦</label>
          <input
            inputMode="numeric"
            value={propertyCost}
            onChange={handlePropertyCostChange}
            className="form-control"
            name="propertyCost"
            required
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
          <input type="hidden" name="equity" value={equity} />
        </div>

        {/* Display Calculated Principal Loan Amount */}
        <div className="mb-3">
          <label className="form-label">Principal Loan Amount ₦</label>
          <input
            type="text"
            value={principal.toLocaleString()}
            className="form-control"
            disabled
          />
          <input type="hidden" name="principal" value={principal} />
        </div>

        {/* Monthly Salary */}
        <div className="mb-3">
          <label className="form-label">Monthly Salary ₦</label>
          <input
            inputMode="numeric"
            value={monthlySalary}
            onChange={handleSalaryChange}
            className="form-control"
            name="monthlySalary"
            required
          />
        </div>

        {/* Other Income */}
        <div className="mb-3">
          <label className="form-label">Other Monthly Income ₦</label>
          <input
            inputMode="numeric"
            value={otherIncome}
            onChange={handleOtherIncomeChange}
            className="form-control"
            name="otherIncome"
            required
          />
        </div>

        {/* Loan Period (Slider) */}
        <div className="mb-3">
          <label className="form-label">Loan Period (Months): {period}</label>
          <input
            type="range"
            min="12"
            max="240"
            step="12"
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
            className="form-range"
            name="period"
            required
          />
        </div>

        {/* Display Monthly Payment */}
        {monthlyPayment !== null && !error && (
          <div className="alert alert-success mt-4" role="alert">
            <strong>Monthly Payment:</strong> ₦
            {Number(monthlyPayment).toLocaleString("en-NG", {
              minimumFractionDigits: 2,
            })}
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

        {/* calculate button */}
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary w-100">Calculate</button>
      </form>
    </div>
  );
};

export default MortgageCalculator;
