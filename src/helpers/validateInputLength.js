/**
 * Check if the input is a positive number and within the range [0, max]
 * @param {string} inputValue
 * @param {function} setError
 * @param {number} max
 */
function validateInputLength(e, inputValue, setError, max) {
  if (
    (!/^\d*\.?\d+$/.test(inputValue) ||
      parseFloat(inputValue) < 0 ||
      parseFloat(inputValue) > max) &&
    e.target.value
  ) {
    setError(`Please enter a positive number between 0 and ${max}.`);
  } else {
    setError("");
  }
}

export default validateInputLength;
