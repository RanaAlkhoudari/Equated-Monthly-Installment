import React from "react";

function LoanTerm({ value, onChange }) {
  return (
    <>
      <label>
        Loan Term in years:
        <input
          type="number"
          min="0"
          max="30"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </>
  );
}

export default LoanTerm;
