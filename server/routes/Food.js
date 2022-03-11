const express = require("express");

const router = express.Router();

const Food = require("../models/Food");

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json({ success: true, foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error Server" });
  }
});

router.post("/", async (req, res) => {
  const { img, title, des, quality, resources, vote } = req.body;

  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is require" });

  try {
    const newFood = new Food({
      img,
      title,
      des,
      quality,
      resources,
      vote,
    });
    await newFood.save();
    res.json({
      success: true,
      message: "Food have post successfully",
      post: newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error Server" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getFood = await Food.findById(req.params.id);
    res.json({ success: true, getFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error Server" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateFood = await Food.findById(req.params.id);
    await updateFood.updateOne({ $set: req.body });
    res.json({ success: true, message: "Update successfully", updateFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error Server" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delFood = await Food.findById(req.params.id);
    await delFood.deleteOne();
    res.json({
      success: true,
      message: "Delete successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error Server" });
  }
});

module.exports = router;
