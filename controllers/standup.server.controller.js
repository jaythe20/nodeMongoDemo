/**
 * Created by jaythe20 on 02/04/17.
 */
var StandUp = require('../models/standup.server.model.js');

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

exports.getNote = function(req, res){


};