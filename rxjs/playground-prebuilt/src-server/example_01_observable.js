import { Observable } from 'rxjs';
import { createSubscriber } from './lib/util'; 
//  Part 1
/*
const sample1$ = new Observable(observer => {
    console.log('Generating Observables');
    observer.next('First Item');
    observer.next('Next Item');
    observer.complete();
    observer.next('Third Item');


});

const sample2$ = new Observable(observer => {
    console.log('Generating Observables');
    observer.next('First Item');
    observer.error(new Error(`ERROR STRING`));
    observer.next('Next Item');
    observer.complete();

});

sample1$.subscribe(item => console.log(`Item:: ${item}`),
    error => console.log(`Error:: ${error}`),
    () => console.log('On Complete'));

sample2$.subscribe({
    next: item => console.log(`Item2:: ${item}`),
    error(error) {
        console.log(`Error2:: ${error}`)
    },
    complete: function () {
        console.log('On Complete 2');
    }
});


//  Part 2

function createInterval$(time) {
    let counter = 0;
    return new Observable(observer => {
        const interval = setInterval(() => {
            console.log(`Generating ${counter}`);
            observer.next(counter++);
        }, time);

        return () => {                               // ************************ seems this is called after subscription2 ended also (not only for subscription 1 end) but interval is not cleared :thinking_face
            console.log('Clearing Observable!')
            clearInterval(interval);
        }
    })
}

const everySecond$ = createInterval$(1000);
// const subscription1 = everySecond$.subscribe(createSubscriber('One'));
// setTimeout(() => subscription1.unsubscribe(), 15000);


// const subscription2 = everySecond$.subscribe(createSubscriber('two'));
// setTimeout(() => subscription2.unsubscribe(), 5000);

function take$(sourceObservable$, count) {
    return new Observable(observer => {
        let counter = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) {
                if (counter <= count) {
                    if (counter == count)
                        observer.complete();
                    else
                        observer.next(item);
                    counter++;    
                }
            },
            error(error) { observer.error(error); },
            complete() { observer.complete(); }
        })

        return () => {
            subscription.unsubscribe();
        }
    })
}

const firstFour$ = take$(everySecond$, 4);
firstFour$.subscribe(createSubscriber('three'));
*/

//  Observables with multiple subscriptions starting at different times
// Second delayed subscriber receives all the observable data from beginning
let timer$ = Observable.timer(0, 1000).take(5);

timer$.subscribe(createSubscriber('timer1'));

setTimeout(() => {
    timer$.subscribe(createSubscriber('timer2'))
}, 2000);
