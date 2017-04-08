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