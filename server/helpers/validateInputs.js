/**
 *
 * @param {number} value
 * @returns boolean
 */
function isValidLoanTerm(value) {
  return parseFloat(value) > 0 && parseFloat(value) <= 30;
}

/**
 *
 * @param {number} value
 * @returns boolean
 */
function isValidLoanValue(value) {
  return parseFloat(value) > 0;
}

/**
 *
 * @param {number} value
 * @returns boolean
 */
function isValidInterestRate(value) {
  const floatValue = parseFloat(value);
  return !isNaN(floatValue) && floatValue >= 0 && floatValue <= 100;
}

/**
 *
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
