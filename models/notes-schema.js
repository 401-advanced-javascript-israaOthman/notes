'use strict';

const mongoose = require('mongoose');

const userNotes = mongoose.Schema({
  text : {type : String , required : true},
  category : {type : String , required : true},
});

module.exports = mongoose.model('UserNotes',userNotes);