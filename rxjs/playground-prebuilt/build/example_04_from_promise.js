'use strict';

var _rxjs = require('rxjs');

var _util = require('./lib/util');

function getItems() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve('HELLO');
        }, 1000);
    });
}

_rxjs.Observable.fromPromise(getItems()).subscribe((0, _util.createSubscriber)('promise'));