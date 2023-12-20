const calculateEmi = require("../helpers/calculateEmi");

describe("Calculate emi", () => {
  const emi = "1.88";
  test("CalculateEmi function should return the same emi value", async () => {
    expect(calculateEmi(100, 20, 11)).toBe(emi);
  });
});
