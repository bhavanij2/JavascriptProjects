'use strict';

var _rxjs = require('rxjs');

var _util = require('./lib/util.js');

var _domain = require('domain');

_rxjs.Observable.of(1, 2, 3).subscribe((0, _util.createSubscriber)('of'));

_rxjs.Observable.of([1, 2, 3]).subscribe((0, _util.createSubscriber)('of with array'));

_rxjs.Observable.from([1, 2, 3]).subscribe((0, _util.createSubscriber)('from'));

_rxjs.Observable.empty().subscribe((0, _util.createSubscriber)('empty'));

_rxjs.Observable.throw(123).subscribe((0, _util.createSubscriber)('error'));

var counter = 0;
var defer$ = _rxjs.Observable.defer(function () {
    // ????
    counter++;
    return _rxjs.Observable.of(counter);
});

defer$.subscribe((0, _util.createSubscriber)('defer0'));
defer$.subscribe((0, _util.createSubscriber)('defer1'));

// Observable.create()

_rxjs.Observable.never().subscribe((0, _util.createSubscriber)('never'));

_rxjs.Observable.range(10, 5).subscribe((0, _util.createSubscriber)('range'));

// Observable.interval(1000)
// .take(5)
// .subscribe(createSubscriber('interval'));

// Observable.timer(1000, 2000)            // Initial Delay, Period between items
// .take(5)
// .subscribe(createSubscriber('timer'));