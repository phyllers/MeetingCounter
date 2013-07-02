
var Meeting = require('../models/meetings.js');

exports.post = function(req, res) {
    new Meeting({name: req.body.name, cost: req.body.cost}).save();
    res.send({name: req.body.name, cost: req.body.cost});
}

exports.list = function(req, res) {
  Meeting.find({}).sort({'endDate': -1}).exec(function(err, meetings) {
    res.render('index', {meetingList: meetings});
  });
}