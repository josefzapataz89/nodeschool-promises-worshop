'use strict';

function counter(num) {
    console.log(num);
    return num + 1;
}

function alwaysThrows() {
    throw new Error('OH NOES');
}

function onReject(error) {
    console.log(error.message);
}

Promise.resolve(counter(1))
    .then(counter)
    .then(counter)
    .then(counter)
    .then(counter)
    .then(alwaysThrows)
    .then(counter)
    .then(counter)
    .catch(onReject);
