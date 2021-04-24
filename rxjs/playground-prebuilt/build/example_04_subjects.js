'use strict';

var _rxjs = require('rxjs');

var _util = require('./lib/util');

//  Subjects with multiple subscriptions starting at different times
// Second delayed subscriber receive the Subject data emitted after its subscription, previous data is not received

var subject$ = new _rxjs.Subject();
subject$.subscribe((0, _util.createSubscriber)('subs1'));

subject$.next(1);
subject$.next(2);
subject$.next(3);
subject$.next(4);

subject$.subscribe((0, _util.createSubscriber)('subs2'));

subject$.next(5);