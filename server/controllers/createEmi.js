const calculateEMI = require("../helpers/calculateEmi");
const handleErrorMessages = require("../helpers/handleErrorMessages");
const EmiModel = require("../models/emi");

/**
 * * This method uses two parameters the request and the response and will either return a 201, 400 or 500 status response to the user.
 * - 400: if the body of the request contains invalid fields
 * - 201: if the fields are correct
 * - 500: if an unexpected error occurs
 *
 * @param {object} req
 * @param {object} res
 * @returns response
 */

async function createEmi(req, res) {
  try {
    const { loanValue, interestRate, loanTerm, email } = req.body;

    const validationError = handleErrorMessages(
      loanValue,
      interestRate,
      loanTerm,
      email
    );
    if (validationError) {
      return res.status(400).json({ error: validationError });
    } else {
      const emi = calculateEMI(loanValue, interestRate, loanTerm);
      const emiModel = await new EmiModel({
        loanValue,
        interestRate,
        loanTerm,
        email,
        emi,
      });
      await emiModel.save();
      return res.status(201).json({ emi });
    }
  } catch (error) {
    res.status(500).send(`An error occurred: ${error}`);
  }
}

module.exports = createEmi;
