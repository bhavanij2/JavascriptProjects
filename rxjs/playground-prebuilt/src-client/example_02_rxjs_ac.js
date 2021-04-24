import $ from 'jquery';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/debounceTime';
// import { fromEvent } from 'rxjs/operators';

const $title = $("#title");
const $results = $("#results");

Observable
.fromEvent($title, 'keyup')
.map(event => event.target.value)
.debounceTime(200)
.distinctUntilChanged()
.switchMap(getItems)
.subscribe(items => {
    $results.empty();
    $results.append(items.map(item => $('<li />').text(item)));
});

function getItems(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([title, 'Item', 'Item 2']), 500 + (Math.random() * 2000))
    });
}