'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  title: String,
  genre: [String],
  publisher: String,
  author: String,
  postDate: Date,
  platform: [String],
  description: String
});

module.exports = mongoose.model('Review', ReviewSchema);
