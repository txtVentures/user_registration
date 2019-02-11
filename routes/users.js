var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/register', function(req, res) {
  models.User.create({
    first: req.body.first,
    last: req.body.last,
    username: req.body.username,
    password: req.body.password
  }).then(function() {
    res.redirect('/login');
  });
});

module.exports = router;