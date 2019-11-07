'use strict'

function all(promise1, promise2) {

    return new Promise((fulfill, reject) => {
        let counter = 0;

        let results = [];

        promise1.then((val) => {
            results[0] = val;

            counter++;

            if (counter >= 2) fulfill(results);
        });

        promise2.then((val) => {
            results[1] = val;

            counter++;

            if (counter >= 2) fulfill(results);
        });
    });

}

all(getPromise1(), getPromise2()).then(console.log);


/**
 * OFFICIAL SOLUTION
 * */
// 'use strict';

// /* global getPromise1, getPromise2 */

// function all(a, b) {
//     return new Promise(function (fulfill, reject) {
//         var counter = 0;
//         var out = [];

//         a.then(function (val) {
//             out[0] = val;
//             counter++;

//             if (counter >= 2) {
//                 fulfill(out);
//             }
//         });

//         b.then(function (val) {
//             out[1] = val;
//             counter++;

//             if (counter >= 2) {
//                 fulfill(out);
//             }
//         });
//     });
// }

// all(getPromise1(), getPromise2())
//     .then(console.log);
