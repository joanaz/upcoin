'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Food = mongoose.model('Food');

router.get('/', function(req, res, next) {
    Food.find(req.query).exec()
        .then(function(food) {
            res.json(food)
        })
        .then(null, next)
});

router.post('/', function(req, res, next) {
    Food.create(req.body)
        .then(function(food) {
            res.status(201).json(food)
        })
        .then(null, next)
});