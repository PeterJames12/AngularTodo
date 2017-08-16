var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://root:toor@ds145193.mlab.com:45193/todo_list', ['user']);

router.get('/get', function (req, res, next) {
    db.user.find(function (err, user) {
        if(err) {
            res.send(err)
        }
        res.json(user);
    });
});

module.exports = router;