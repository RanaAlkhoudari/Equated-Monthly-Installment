import React from "react";

function LoanValue({ value, onChange }) {
  return (
    <>
      <label>
        Loan value:
        <input
          type="number"
          min="0"
          value={value}
          onChange={onChange}
          required
          data-testid="loan-value-input"
        />
      </label>
    </>
  );
}

export default LoanValue;
