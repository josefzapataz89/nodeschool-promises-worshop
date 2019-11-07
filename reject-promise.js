'use strict'

var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 350);
});

function onReject (error) {
    console.log(error.message);
}

// Your solution here
promise.then(null, onReject);
