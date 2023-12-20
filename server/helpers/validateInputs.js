/**
 * Check if the loan term is valid
 * @param {number} value
 * @returns boolean
 */
function isValidLoanTerm(value) {
  return parseFloat(value) > 0 && parseFloat(value) <= 30;
}

/**
 * Check if the loan value is valid
 * @param {number} value
 * @returns boolean
 */
function isValidLoanValue(value) {
  return parseFloat(value) > 0;
}

/**
 * Check if the interest rate is valid
 * @param {number} value
 * @returns boolean
 */
function isValidInterestRate(value) {
  const floatValue = parseFloat(value);
  return !isNaN(floatValue) && floatValue > 0 && floatValue <= 100;
}

/**
 * Check if the email address is valid
 * @param {string} email
 * @returns boolean
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  isValidLoanTerm,
  isValidLoanValue,
  isValidInterestRate,
  isValidEmail,
};
