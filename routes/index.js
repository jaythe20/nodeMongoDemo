var express = require('express');
var router = express.Router();
var standupController = require('../controllers/standup.server.controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/newnote', function (req, res) {
  return standupController.Create(req,res);
});

router.get('/newnote', function (req, res) {
  return standupController.getNote(req, res);
});

module.exports = router;
