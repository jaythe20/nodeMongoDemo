/**
 * Created by jaythe20 on 01/04/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standUpSchema = new Schema({
	memberName : String,
	project: String,
	workYesterday : String,
	workToday: String,
	impediment: String,
	createdOn: {type: Date, default: Date.now}
});

//Export model
module.exports = mongoose.model('StandUp',standUpSchema, 'StandUpList');