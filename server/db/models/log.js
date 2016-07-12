'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
  date: {
    type: Date
  },
  ownedQuantity: {
    type: Number
  },
  doneQuantity: {
    type: Number,
    default: 0
  }
});

mongoose.model('Log', schema);