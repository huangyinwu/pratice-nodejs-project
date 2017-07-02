'use strict'

/**
* pratice node.js project
* @author huangyinwu <huangyinwu@yeah.net>
*/

import mongoose from 'mongoose';

module.exports = function(done){
  const conn == mongoose.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  done();
}
