const {
  isValidLoanValue,
  isValidInterestRate,
  isValidLoanTerm,
  isValidEmail,
} = require("../helpers/validateInputs");

describe("Validate inputs", () => {
  test("isValidLoanValue function should return true with positive value and false with negative value", async () => {
    expect(isValidLoanValue(2)).toBe(true);
    expect(isValidLoanValue(-2)).toBe(false);
  });

  test("isValidInterestRate function should return true with positive value and > 100 and false with negative value", async () => {
    expect(isValidInterestRate(2)).toBe(true);
    expect(isValidInterestRate(-2)).toBe(false);
    expect(isValidInterestRate(133)).toBe(false);
  });

  test("isValidLoanTerm function should return true with positive value and > 30 and false with negative value", async () => {
    expect(isValidLoanTerm(2)).toBe(true);
    expect(isValidLoanTerm(-2)).toBe(false);
    expect(isValidLoanTerm(33)).toBe(false);
  });

  test("isValidEmail function should return true with positive value and > 100 and false with negative value", async () => {
    expect(isValidEmail("rana@gmail.com")).toBe(true);
    expect(isValidEmail("ranagmail.com")).toBe(false);
  });
});
