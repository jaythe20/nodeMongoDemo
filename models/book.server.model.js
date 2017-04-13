/**
 * Created by jaythe20 on 12/04/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = new schema({
    title : {type: String, required : true},
    author : String,
    publication: String,
    price: Number,
    isRead : Boolean,
    createdDate : {type: Date, default : Date.now},
    updatedDate : {type: Date, default : Date.now}
});

module.exports = mongoose.model("Book", bookSchema, 'BookList');
