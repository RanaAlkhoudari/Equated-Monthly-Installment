const mongoose = require("mongoose");
const { Schema } = mongoose;

const emiSchema = new Schema({
  loanValue: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  loanTerm: { type: Number, required: true },
  email: { type: String, required: true },
  emi: { type: String },
});

module.exports = mongoose.model("emi", emiSchema);
