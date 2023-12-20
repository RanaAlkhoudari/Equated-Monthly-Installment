import React, { useState } from "react";
import LoanValue from "./LoanValue";
import InterestRate from "./InterestRate";
import LoanTerm from "./LoanTerm";
import EmailAddress from "./EmailAddress";
import validateInputLength from "../helper/validateInputLength";
import isEmailValid from "../helper/isEmailValid";

function Form() {
  const [loanValue, setLoanValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [email, setEmail] = useState("");
  const [emi, setEmi] = useState("");
  const [error, setError] = useState("");

  function handleLoanValueChange(e) {
    const inputValue = e.target.value;
    setLoanValue(inputValue);
    // Check if the input is a positive number
    if (
      (!/^\d*\.?\d+$/.test(inputValue) || parseFloat(inputValue) <= 0) &&
      e.target.value
    ) {
      setError("Please enter a positive loan value number.");
    } else {
      setError("");
    }
  }

  function handleInterestRateChange(e) {
    const inputValue = e.target.value;
    setInterestRate(inputValue);
    validateInputLength(e, inputValue, setError, 100);
  }

  function handleLoanTermChange(e) {
    const inputValue = e.target.value;
    setLoanTerm(inputValue);
    validateInputLength(e, inputValue, setError, 30);
  }

  function handleEmailAddressChange(e) {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Check if the input is a valid email address
    if (!isEmailValid(inputEmail) && e.target.value) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }

  const url = "http://localhost:8001/calculateEmi";

  async function calculateEmi() {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loanValue: parseFloat(loanValue),
          interestRate: parseFloat(interestRate),
          loanTerm: parseFloat(loanTerm),
          email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setEmi(data.emi);
        setError("");
      } else {
        setEmi("");
        setError(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="form">
      <LoanValue value={loanValue} onChange={handleLoanValueChange} />
      <InterestRate value={interestRate} onChange={handleInterestRateChange} />
      <LoanTerm value={loanTerm} onChange={handleLoanTermChange} />
      <EmailAddress value={email} onChange={handleEmailAddressChange} />
      {error && <p className="error-msg">{error}</p>}
      <button onClick={calculateEmi}>Calculate EMI</button>
      {
        <p>
          Equated Monthly Installment
          <span>{emi}</span>
        </p>
      }
    </div>
  );
}

export default Form;
