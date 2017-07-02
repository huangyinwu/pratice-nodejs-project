'use strict'

/**
* pratice node.js project
* @author huangyinwu <huangyinwu@yeah.net>
*/

import path from "path";
import express from 'express';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import multiparty from 'multiparty';

module.exports = function(done){


  const debug = $.createDebug('init:express');
  debug('init express...');

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  const router = express.Router();
  $.router = router;

  app.use(router);
  app.use('/static',serveStatic(path.resolve(__dirname,'../../static')));

  app.listen($.config.get('web.port'),(err) => {
    done(err);
  });

};