import $ from 'jquery';

const $title = $("#title");
const $results = $("#results");

$title.keyup(e => {
    const title = e.target.value;

    getItems(title)
    .then((items) => {
        $results.empty();
        const listItems = items.map(item => $('<li />').text(item));
        $results.append(listItems);
    }).catch((err) => {
        console.log(err);
    });
});

function getItems(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([title, 'Item', 'Item 2']), 500 + (Math.random() * 500))
    });
}