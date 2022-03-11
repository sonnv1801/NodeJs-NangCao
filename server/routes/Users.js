const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { email, password, address, status, created, update } = req.body;

  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });

  try {
    const newUser = new User({
      email,
      password,
      address,
      status,
      created,
      update,
    });
    await newUser.save();
    res.json({ success: true, message: "Happy", post: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
});

module.exports = router;
