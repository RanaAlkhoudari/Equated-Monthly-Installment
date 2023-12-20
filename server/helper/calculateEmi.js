/**
 *
 * @param {number} loanValue
 * @param {number} interestRate
 * @param {number} loanTerm
 * @returns string (toFixed() converts number to string)
 */
function calculateEmi(loanValue, interestRate, loanTerm) {
  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfPayments = loanTerm * 12;
  const emi =
    (loanValue *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  return emi.toFixed(2);
}

module.exports = calculateEmi;
