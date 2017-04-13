/**
 * Created by jaythe20 on 02/04/17.
 */
var StandUp = require('../models/standup.server.model.js');

//Export controller action for Post method
exports.Create = function(req,res){
	var entry = new StandUp({
		memberName : req.body.memberName,
		project: req.body.project,
		workYesterday : req.body.workYesterday,
		workToday: req.body.workToday,
		impediment: req.body.impediment
	});
	entry.save(function(err){
		if(err) return handleError(err);
	});
	res.redirect(301,'/');
};

//Export controller action for Get Method
exports.getNote = function(req, res){
	//res.send("Hello");
   StandUp.find({memberName : 'Jay'}, function (err, result) {
		if(err) console.log(err);
		res.json(result);
    });
};

//Get All
exports.list = function (req,res) {
	var query = StandUp.find();
	query.sort({createdOn : 'desc'})
		.limit(15)
		.exec(function (err, results) {
			return res.json(results);
        });
};

exports.filterByMember = function (req, res) {
    var query = StandUp.find();
    var filter = req.body.memberName;
    query.sort({createdOn : 'desc'});
    if(filter.length > 0)
	{
		query.where({memberName : filter});
	}
	query.exec(function (err, results) {
		return res.json(results);
    });
};