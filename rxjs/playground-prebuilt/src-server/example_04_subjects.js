import { Observable, Subject } from 'rxjs';
import { createSubscriber } from './lib/util';

//  Subjects with multiple subscriptions starting at different times
// Second delayed subscriber receive the Subject data emitted after its subscription, previous data is not received

let subject$ = new Subject();
subject$.subscribe(createSubscriber('subs1'));

subject$.next(1)
subject$.next(2)
subject$.next(3)
subject$.next(4)

subject$.subscribe(createSubscriber('subs2'));

subject$.next(5)