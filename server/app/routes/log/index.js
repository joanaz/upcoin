'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Log = mongoose.model('Log');

router.get('/', function(req, res, next) {
    Log.find(req.query).exec()
        .then(function(log) {
            console.log(log)
            res.json(log)
        })
        .then(null, next)
});

router.post('/', function(req, res, next) {
    Log.create(req.body)
        .then(function(log) {
            res.status(201).json(log)
        })
        .then(null, next)
});

router.param('id', function(req, res, next, id) {
    Log.findById(id)
        .then(function(log) {
            if (!log) throw Error('Not Found');
            req.log = log;
            next();
        })
        .then(null, next);
});

router.get('/:id', function(req, res) {
    res.json(req.log);
});

router.put('/:id', function(req, res, next) {
    _.merge(req.log, req.body);
    req.log.save()
        .then(function(log) {
            res.json(log);
        })
        .then(null, next);
})