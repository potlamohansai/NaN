const express = require("express");
const router = express.Router();

const Card = require("../models/Card");

// Add a new card
router.post("/", async (req, res) => {
  const { type, cardNumber, cardHolder, expiryDate, cvv } = req.body;

  try {
    const newCard = new Card({ type, cardNumber, cardHolder, expiryDate, cvv });
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Get all cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
