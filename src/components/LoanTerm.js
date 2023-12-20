import React from "react";

function LoanTerm({ value, onChange }) {
  return (
    <div>
      <label>
        Loan Term in years:
        <input
          type="number"
          min="0"
          max="30"
          value={value}
          onChange={onChange}
          required
          data-testid="loan-term-input"
        />
      </label>
    </div>
  );
}

export default LoanTerm;
