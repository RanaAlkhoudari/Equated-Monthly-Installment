/**
 * Check if the email address is valid
 * @param {string} email
 * @returns boolean
 */
function isEmailValid(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export default isEmailValid;
