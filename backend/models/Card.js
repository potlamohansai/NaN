const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    cardNumber: { type: String, required: true },
    cardHolder: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
