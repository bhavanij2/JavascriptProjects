import { Observable } from 'rxjs';
import { createSubscriber } from './lib/util';

function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('HELLO'), 1000);
    });
}

Observable.fromPromise(getItems())
.subscribe(createSubscriber('promise'));