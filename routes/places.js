const express = require("express");
const router = express.Router();

// Mongoose models
const Place = require("../../models/Place");

// @route GET api/places
// @desc Get bugs
// @access Public
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/places
// @desc Create a place
// @access Public
router.post("/", async (req, res) => {
  const { adress } = req.body;

  try {
    const newBug = new Bug({
      address: adress,
      name: "Jenis Splendid Ice Creams",
      lat: 40.099371,
      long: -83.113963
    });

    const place = await newPlace.save();

    res.json(place);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
