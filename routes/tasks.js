var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://root:toor@ds145193.mlab.com:45193/todo_list', ['tasks'])

router.get('/tasks', function(req,res, next){
    db.tasks.find(function(err, tasks){
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    })
});

router.get('/task/:id', function(req,res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err) {
            res.send(err);
        }
        res.json(task);
    })
});

router.post('/task', function (req, res, next) {
    var task = req.body;

    if (!task.title || !(task.idDone + ' ')) {
        res.status(400);
        res.json({
            "error": "Bad Request"
        });
    } else {
        db.tasks.save(task, function (err, task) {
            if(err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

router.delete('/task/:id', function(req,res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err) {
            res.send(err);
        }
        res.json(task);
    })
});

router.put('/task/:id', function(req,res, next){

    var task = req.body;

    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title= task.title;
    }

    if (!updTask) {
        res.status(100);
        res.json({
            "error": "Bad Request"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask,{}, function(err, task){
            if(err) {
                res.send(err);
            }
            res.json(task);
        })
    }

    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err) {
            res.send(err);
        }
        res.json(task);
    })
});

module.exports = router;