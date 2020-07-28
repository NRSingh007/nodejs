/*
// Modules, the code in this file is not in main "app.js", and will be calling if needed

var counter = function (arr) {
  return "There are " + arr.length + " elements in this array";
};

var adder = function (a, b) {
  return `The sum of the two numbers is ${a + b}`; // template string which uses (`back quote`), in template strings we an embed variables or expression without concatenating
};

var pi = 3.142;

// exporting module to made acessible outside the file "count.js"
// "module.exports" is just an empty objects
// module.exports = counter;

// to export different object of this module we need to specify properties
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi =pi;
*/

// direct method without the middleman

module.exports.counter = function (arr) {
    return "There are " + arr.length + " elements in this array";
  };
  
  module.exports.adder = function (a, b) {
    return `The sum of the two numbers is ${a + b}`; // template string which uses (`back quote`), in template strings we an embed variables or expression without concatenating
  };
  
  module.exports.pi = 3.142;
  
  
  /*
  // other different way of exporting
  
  var counter = function (arr) {
    return "There are " + arr.length + " elements in this array";
  };
  
  var adder = function (a, b) {
    return `The sum of the two numbers is ${a + b}`; // template string which uses (`back quote`), in template strings we an embed variables or expression without concatenating
  };
  
  var pi = 3.142;
  
  // setting the module.exports into object with properties, literal notation
  
  module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
  };
  */