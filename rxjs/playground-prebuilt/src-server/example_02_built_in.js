import { Observable } from 'rxjs';
import { createSubscriber } from './lib/util.js';
import { create } from 'domain';

Observable.of(1, 2, 3)
.subscribe(createSubscriber('of'));

Observable.of([1,2,3])
.subscribe(createSubscriber('of with array'));

Observable.from([1,2,3])
.subscribe(createSubscriber('from'));

Observable.empty()
.subscribe(createSubscriber('empty'));

Observable.throw(123)
.subscribe(createSubscriber('error'));

let counter = 0;
const defer$ = Observable.defer(() => {                 // ????
    counter++;
    return Observable.of(counter);
})

defer$.subscribe(createSubscriber('defer0'));
defer$.subscribe(createSubscriber('defer1'));       

// Observable.create()

Observable.never()
.subscribe(createSubscriber('never'));

Observable.range(10, 5)
.subscribe(createSubscriber('range'));

// Observable.interval(1000)
// .take(5)
// .subscribe(createSubscriber('interval'));

// Observable.timer(1000, 2000)            // Initial Delay, Period between items
// .take(5)
// .subscribe(createSubscriber('timer'));


