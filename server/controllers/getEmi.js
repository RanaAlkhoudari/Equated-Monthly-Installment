const EmiModel = require("../models/emi");

/**
 ** This method uses two parameters the request and the response and will either return a 200, 404 or 500 status response to the user.
 * - 404: if there aren't records in EmiModel
 * - 200: if there are records in EmiModel
 * - 500: if an unexpected error occurs
 *
 * @param {object} req
 * @param {object} res
 * @returns
 */
async function getEmi(req, res) {
  try {
    const emiModel = await EmiModel.find({});
    // Check if the array is empty
    if (emiModel.length === 0) {
      return res.status(404).json({
        message: `Emi not found`,
      });
    } else {
      return res.status(200).send(emiModel);
    }
  } catch (error) {
    res.json({ error });
  }
}

module.exports = getEmi;
