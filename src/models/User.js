'use strict'

/**
* pratice node.js project
* @author huangyinwu <huangyinwu@yeah.net>
*/

import mongoose from 'mongoose';

module.exports = function(done){
  const Schema = mongoose.Schema,
  const ObjectId = Schema.ObjectId;

  const User = new Schema({
      name: {type: String,unique: true},
      password: {type: String},
      nickname: {type: String}
  });
  $.mongodb.model('User',User);
};
