'use strict'

let first_promise = first().then((val) => {
    return second(val);
});

let second_promise = first_promise.then((val) => {
    return val;
});

second_promise.then(console.log);