'use strict'

// Fetch JSON from http: //localhost:1337 and console.log it.
const URL = "http://localhost:1337";


const http = require('q-io/http');

http.read(URL)
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()
