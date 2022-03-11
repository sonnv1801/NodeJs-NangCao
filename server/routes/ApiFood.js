const express = require("express");

const router = express.Router();

const Food = require("../models/Food");

router.get("/filler-title", async (req, res) => {
  try {
    const results = await Food.find({ title: /Mango$/i });
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
