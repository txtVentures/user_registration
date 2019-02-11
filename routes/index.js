const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.users ]
  }).then(function(users) {
    res.render('index', {
      title: 'New England Clam Chowder Crowd',
      users: users
    });
  });
});

module.exports = router;