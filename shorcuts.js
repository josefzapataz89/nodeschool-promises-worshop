'use strict'

function onReject (error) {
    console.log(error.message);
}

var promise = new Promise(function (fulfill, reject) {
    fulfill('FULFILL NORMAL WAY');
});
promise.then(console.log);

var promise_b = new Promise(function (fulfill, reject) {
    reject(new Error('REJECT BY NORMAL WAY'));
});
promise_b.catch(onReject);

var promise_c = Promise.resolve('RESOLVE THE PROMISE');
promise_c.then(console.log);

var promise_d = Promise.reject(new Error('REJECT THE PROMISE'));
promise_d.then(null, onReject);


/**
 * workshop official solution
 */
    // 'use strict';
    
    // var message;
    // var promise;
    
    // function randomBytes(n) {
    //   return (Math.random() * Math.pow(256, n) | 0).toString(16);
    // }
    
    // message =
    //   'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
    //   randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
    //   'terminated in 3 seconds.';
    
    // promise = Promise.reject(new Error(message));
    
    // promise.catch(function (err) {
    //   var i = 3;
    
    //   process.stderr.write(err.message);
    
    //   setTimeout(function boom() {
    //     process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
    //     if (!i) {
    //       process.stderr.write('\n..... . . . boom . . . .....\n');
    //     } else {
    //       setTimeout(boom, 1000);
    //     }
    //   }, 1000);
    // });