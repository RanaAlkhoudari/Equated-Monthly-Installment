import React from "react";

function InterestRate({ value, onChange }) {
  return (
    <div>
      <label>
        Yearly Interest rate:
        <input
          type="number"
          min="0"
          max="100"
          value={value}
          onChange={onChange}
          required
          data-testid="interest-rate-input"
        />
      </label>
    </div>
  );
}

export default InterestRate;
