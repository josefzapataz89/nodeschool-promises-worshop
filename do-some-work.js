'use strict'

const URL_A = "http://localhost:7000/";
const URL_B = "http://localhost:7001/";

const http = require('q-io/http');

http.read(URL_A)
    .then((user_id) => {
        return http.read(`${URL_B}${user_id}`);
    })
    .then((result) => {
        console.log(JSON.parse(result));
    })
    .catch(console.error)
    .done();

/**
 * official solution
 */

//  var qhttp = require('q-io/http');

//  qhttp.read("http://localhost:7000/")
//      .then(function (id) {
//          return qhttp.read("http://localhost:7001/" + id);
//      })
//      .then(function (json) {
//          console.log(JSON.parse(json));
//      })
//      .then(null, console.error)
//      .done();


