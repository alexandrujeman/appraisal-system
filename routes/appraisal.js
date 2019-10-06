const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Appraisal = require("../models/Appraisal");

// route  GET api/appraisals
// desc   Get all users appraisals
// access Private
router.get("/", auth, async (req, res) => {
  try {
    const appraisals = await Appraisal.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(appraisals);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// route  POST api/appraisals
// desc   Add new appraisal
// access Private
router.post("/", (req, res) => {
  res.send("Add appraisals");
});

// route  PUT api/appraisal/:id
// desc   Update appraisal
// access Private
router.put("/:id", (req, res) => {
  res.send("Update appraisal");
});

// route  DELETE api/appraisal/:id
// desc   Update appraisal
// access Private
router.delete("/:id", (req, res) => {
  res.send("delete appraisal");
});

module.exports = router;
