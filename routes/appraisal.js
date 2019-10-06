const express = require("express");
const router = express.Router();

// route  GET api/appraisals
// desc   Get all users appraisals
// access Private
router.get("/", (req, res) => {
  res.send("Get all appraisals");
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
