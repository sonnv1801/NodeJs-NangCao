const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.get("/diachi", async (req, res) => {
  try {
    const results = await User.find({ address: /Da Nang$/i });
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/password", async (req, res) => {
  try {
    const results = await User.find({ password: /^[\s\S]{7,}$/ });
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/status", async (req, res) => {
  try {
    const results = await User.find({
      $and: [{ status: false }, { update: { $gt: new Date(Date.now()) } }],
    });
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/state/:id", async (req, res) => {
  try {
    const results = await User.findById(req.params.id);
    res.json({ success: true, results });
  } catch (err) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.put("/state/:id", async (req, res) => {
  try {
    const results = await User.findById(req.params.id);
    if (results.userId === req.body.userId) {
      await results.updateOne({
        $set: {
          status: req.body.status,
        },
      });
      res.json({ success: true, results });
    } else {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "There're something wrong!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
