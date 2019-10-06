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
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      email,
      phone,
      evalperiod,
      position,
      team,
      teamleader,
      achieved,
      goals,
      wishlist,
      swot,
      feedback,
      tlfeedback,
      type
    } = req.body;
    try {
      const newAppraisal = new Appraisal({
        name,
        email,
        phone,
        evalperiod,
        position,
        team,
        teamleader,
        achieved,
        goals,
        wishlist,
        swot,
        feedback,
        tlfeedback,
        type,
        user: req.user.id
      });

      const appraisal = await newAppraisal.save();
      res.json(appraisal);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

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
