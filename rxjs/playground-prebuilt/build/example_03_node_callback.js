'use strict';

var _rxjs = require('rxjs');

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fs.readdir('./src-server', (err, files) => {
//     if(err) 
//         console.error(err);
//     else
//         console.log(files);        
// });

var readDir$ = _rxjs.Observable.bindNodeCallback(_fs2.default.readdir);

readDir$('./src-server').mergeMap(function (files) {
  return _rxjs.Observable.from(files);
}).map(function (file) {
  return 'MANIPUATED:: ' + file;
}).subscribe((0, _util.createSubscriber)('node.readdir'));