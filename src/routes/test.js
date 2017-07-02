'use strict'

/**
* pratice node.js project
* @author huangyinwu <huangyinwu@yeah.net>
*/

module.exports = function(done){

  $.router.get('/',function(req,res,next){
    res.end('test');
  });

  done();
};
