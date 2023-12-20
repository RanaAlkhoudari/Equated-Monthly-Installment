import React from "react";

function EmailAddress({ value, onChange }) {
  return (
    <>
      <label>
        Email Address:
        <input
          type="email"
          value={value}
          onChange={onChange}
          required
          data-testid="email-address-input"
        />
      </label>
    </>
  );
}

export default EmailAddress;
