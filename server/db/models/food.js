'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    photo: {
        type: String
    },
    quantity: {
        type: Number
    },

});

mongoose.model('Food', schema);