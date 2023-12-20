/**
 *
 * @param {string} inputValue
 * @param {function} setError
 * @param {number} max
 */
function validateInputLength(inputValue, setError, max) {
  // Check if the input is a positive number and within the range [0, max]
  if (
    !/^\d*\.?\d+$/.test(inputValue) ||
    parseFloat(inputValue) < 0 ||
    parseFloat(inputValue) > max
  ) {
    setError(`Please enter a positive number between 0 and ${max}.`);
  } else {
    setError("");
  }
}

export default validateInputLength;
