const {
  isValidLoanValue,
  isValidInterestRate,
  isValidLoanTerm,
  isValidEmail,
} = require("./validateInputs");

/**
 *
 * @param {number} loanValue
 * @param {number} interestRate
 * @param {number} loanTerm
 * @param {string} email
 * @returns Error message or Null
 */
function validateInputs(loanValue, interestRate, loanTerm, email) {
  if (!isValidLoanValue(loanValue)) {
    return "Invalid loan value. Please enter a positive number.";
  }

  if (!isValidInterestRate(interestRate)) {
    return "Invalid interest rate. Please enter a positive number between 0 and 100.";
  }

  if (!isValidLoanTerm(loanTerm)) {
    return "Invalid loan term. Please enter a positive number between 0 and 30.";
  }

  if (!isValidEmail(email)) {
    return "Invalid email address. Please enter a valid email.";
  }

  return null; // No validation error
}

module.exports = validateInputs;
