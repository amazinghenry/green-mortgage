import React, { useState } from "react";
import "./MortgageCalculator.css";

const MortgageCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState<number | "">("");
  const [loanTerm, setLoanTerm] = useState<number>(10); // Default loan term of 10 years
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  const isFormValid = Number(loanAmount) > 0 && Number(interestRate) > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const monthlyRate = Number(interestRate) / 100 / 12; // Convert annual rate to monthly
    const numberOfPayments = Number(loanTerm) * 12; // Convert years to months

    if (monthlyRate === 0) {
      // No interest rate
      setMonthlyPayment(Number(loanAmount) / numberOfPayments);
    } else {
      // Standard loan amortization formula
      const payment =
        (Number(loanAmount) *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  const resetCalculator = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm(1); // Reset loan term to default value
    setMonthlyPayment(null);
  };

  return (
    <div className="mortgageCalculatorContainer container">
      <h1>How much house can I afford?</h1>
      <p>
        Enter the price of the home, your down payment, and a few details about
        your new home and loan terms to estimate your monthly payment breakdown
      </p>

      <div className="mortgageCalculatorFormContainer">
        <form onSubmit={handleSubmit}>
          <div className="mortgageCalculatorLoanAmount">
            <label htmlFor="loanAmount">Loan Amount:</label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value) || "")}
              placeholder="Enter loan amount"
              required
            />
          </div>
          <div className="mortgageCalculatorInterestRate">
            <label htmlFor="interestRate">Interest Rate (%):</label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value) || "")}
              placeholder="Enter interest rate"
              required
            />
          </div>
          <div className="mortgageCalculatorLoanTerm">
            <label htmlFor="loanTerm">Loan Term (Years):</label>
            <input
              type="range"
              id="loanTerm"
              min="0"
              max="20"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            />
            <div>Selected Term: {loanTerm} years</div>
          </div>
          <button
            type="submit"
            className="mortgageCalculatorButton"
            style={{
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.6,
            }}
            disabled={!isFormValid}
          >
            Calculate
          </button>
          <button
            className="mortgageCalculatorReset"
            type="button"
            onClick={resetCalculator}
          >
            Reset
          </button>
        </form>
        <>
          {monthlyPayment !== null && (
            <div className="mortgageCalculatorResultContainer">
              <div className="mortgageCalculatorResultTitle">
                Estimated Monthly Payment:
              </div>
              <div className="mortgageCalculatorResult">
                &#8358;
                {formatNumber(parseFloat(monthlyPayment.toFixed(2)))}
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default MortgageCalculator;
