'use strict'

const arg = process.argv[2];

function parsePromised(data) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(data));
        } catch (error) {
            reject(error);
        }
    });
}

function onReject(error) {
    console.log(error.message);
}

parsePromised(arg)
    .then(null, onReject);
