'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
    User.find(req.query).exec()
        .then(function(user) {
            res.json(user)
        })
        .then(null, next)
});

router.post('/', function(req, res, next) {
    User.create(req.body)
        .then(function(user) {
            res.status(201).json(user)
        })
        .then(null, next)
});

router.param('id', function(req, res, next, id) {
    User.findById(id)
        .populate('log')
        .exec()
        .then(function(user) {
            if (!user) throw Error('Not Found');
            req.user = user;
            next();
        })
        .then(null, next);
});

router.get('/:id', function(req, res) {
    res.json(req.user);
});

router.put('/:id', function(req, res, next) {
    _.merge(req.user, req.body);
    req.user.save()
        .then(function(user) {
            res.json(user);
        })
        .then(null, next);
})