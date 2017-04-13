/**
 * Created by jaythe20 on 12/04/17.
 */
var Book = require('../models/book.server.model.js');


//GetAll
exports.GetAll = function (req, res) {
    Book.find({},function (err, results) {
        if(err) console.log(err);
        return res.send(results);
    });
};

//GetById
exports.GetById = function (req, res) {
    var id = req.params.id;
    Book.findById(id,function (err,results) {
        if(err) console.log(err);
        return res.send(results);
    });

};

//Post
exports.Add = function (req, res) {
    Book.create(req.body,function (err, results) {
        if(err) console.log(err);
        return res.send("Hola"+results);
    });
};

//Put
exports.Update = function (req,res) {
    var id = req.params.id;
    var updates = req.body;
    //updates.updatedDate = Date.now;
    Book.findByIdAndUpdate(id,updates,function (err, results) {
        if(err) console.log(err);
        return res.send("Updated successfully");
    });
};

//Remove
exports.Delete = function (req, res){
    var id = req.params.id;
    Book.findByIdAndRemove(id,function (err, results) {
        if(err) console.log(err);
        return res.send("Successfully removed");
    })
};

exports.Import = function (req, res) {
    Book.create(
        {title : "T1", "author": "A1", "publication": "P1", "price" : 101, "isRead" : true},
        {title : "T2", "author": "A2", "publication": "P2", "price" : 102, "isRead" : false},
        {title : "T3", "author": "A3", "publication": "P3", "price" : 103, "isRead" : true},
        {title: "T4", "author": "A4", "publication": "P4", "price" : 104, "isRead" : false}
    ,function (err) {
        if(err)
            return console.log(err);
        return res.redirect(301, /books/);
        });

};


