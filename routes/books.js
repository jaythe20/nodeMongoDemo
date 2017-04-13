/**
 * Created by jaythe20 on 12/04/17.
 */
var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book.server.controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    return bookController.GetAll(req,res);
});

router.get('/:id', function(req, res, next) {
    return bookController.GetById(req,res);
    //res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    return bookController.Add(req,res);
    //res.render('index', { title: 'Express' });
});

router.put('/:id', function (req, res) {
    return bookController.Update(req,res);
});

router.delete('/:id', function (req, res) {
    return bookController.Delete(req, res);
});

router.get('/import', function (req, res) {
    return bookController.Import(req, res);
});

module.exports = router;
