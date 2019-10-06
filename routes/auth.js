const express = require('express');
const router = express.Router();


// route  GET api/auth
// desc   Log in
// access Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// route  POST api/auth
// desc   Log in
// access Public
router.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = router;
