// some of the "Global Objects"
// require, exports

/*
to use or call the different file like "count.js" in this,
we need to "require" the required file and assign it to variable
with same name that "module.exports"
*/

// var counter = require("./count");

// this "counter()" of "count.js" will show error if it is not exports the module from its file
// console.log(counter(["apple", "banana", "mango"]));

// requiring all modules
var count = require("./count");

console.log(count.adder(3, 4));
console.log(count.pi);
console.log(count.adder(2, count.pi));


/* ------------------------------------------------------------------------------------ */


/*
// core modules "fs", which can be use to read and write files of system
var fs = require('fs');

// which read the file before the below code as it is "Sync"
// blocking code
// read the file and encoding type as we are dealing with binary data

var readme = fs.readFileSync('./readme.md', 'utf-8');
// console.log(readme);

//first parameter is where we want the file to be written
//second parameter is the data we want to write to first parameter
fs.writeFileSync('writeMe.md', readme);
*/

// Async file read and write
/*var fs = require("fs");

 
// for async we need to write a callback function to fire when the process is completed
// and that is the third parameter in this method, and this callback function can take
// two parameter i.e., "err" if there is a problem in this method and
// second is "data" that we retrive that we read from the file

fs.readFile("readme.md", "utf-8", function (err, data) {
  // console.log(data);
  fs.writeFile("write.md", data, function (err, result) {
    if (err) console.log("error", err);
  });
});
*/

/* ------------------------------------------------------------------------------------ */


// create and remove directories
var fs = require('fs');

// passing the file_name to delete
/*
    fs.unlink('write.md', function (err, result) {
        if (err) console.log("error", err);
    });
*/
// creating 'new' directory
    // fs.mkdirSync('new');

// deleting 'new' directory
    // fs.rmdirSync('new');

// Async
/*
fs.mkdir('new', function() {
    fs.readFile('readme.md', 'utf-8', function(err, data) {
        fs.writeFile('./new/write.md', data, function(err, result) {
            if (err) console.log("error", err);
        });
    });
});
*/
fs.unlink('./new/write.md', function() {
    fs.rmdir('new', function(){});
});


/* ------------------------------------------------------------------------------------ */


// core module

/* whatever written on the module 
that exports of this module is gonna be stored in the variable "events"*/
var events = require("events");

/*
whatever exports properties in this module is the event emitter and
we can use the event emitter in node js to create custom events and
then react to those events when they are emitted so, which is similar to jQuery element
*/

// element.on('click', function(){})

// event emitter which is similar to a "constructor"
// creating own eventEmitter object stored
var myEmitter = new events.EventEmitter();

// when this "someEvent" occurs, when emits to do something that's going to be in this callback function which can have parameter
myEmitter.on("someEvent", function (msg) {
  console.log(msg);
});

// emitting the event
// 'The event was emitted' is the parameter that passed in the callback function
myEmitter.emit("someEvent", "The event was emitted");

/*
event was emitted logged to the console of the terminal and that's because
we listened out for this event "someEvent" being emitted by saying ".on('someEvent)
we are listing for that event now on the object "myEmitter" and then what we are doing
is manually emitting that event "someEvent" and passing the data string "The event was emitted"
into the function parameter, and when this event is emitted the callback function is fired
and it logs the message to the console
*/


/* ------------------------------------------------------------------------------------- */


// core module "util", short for utilities
/*
allows to inherit certain things from objects built onto nodejs or other objects
*/
var util = require("util");

// creating a new object constructor
var Person = function (name) {
  this.name = name; // whenever we create a new person we need to pass it through "name"
};

// inheriting the event emitter
/* 
the first thing pass through is the object constructor that we want to inherit
and the thing we want to inherit i.e., "events.EventEmitter"
Now the "Person" constructor is going to be able to have custom events attached to it
*/
util.inherits(Person, events.EventEmitter);

var tom = new Person("tom");
var jerrry = new Person("jerry");
var spike = new Person("spike");

// storing the above names in array
var people = [tom, jerrry, spike];

people.forEach(function (person) {
  person.on("speak", function (msg) {
    console.log(person.name + " said: " + msg);
  });
});

tom.emit("speak", "hey! bro I'm tom");
jerrry.emit("speak", "hey! bro I'm jerrry");
spike.emit("speak", "hey! bro I'm spike");


/* ------------------------------------------------------------------------------------ */


// "time" and "time1" is just names of variable, and they cannot be "const" as thier value is not constant
time = 0;
time1 = 0;

console.log("node");

/*
setTimeout(function () {
  console.log("10 seconds has been passed");
}, 10000);
*/

/*
setInterval(function () {
  time += 3; // the time addition should be same as that of interval. The time used here is just number that uses for function, it doesn't have to do anything with time interval.
  console.log(time + " seconds have been passed");
}, 10000); // this is the actual time interval
*/

/*
var timer = setInterval(function () {
  time1 += 1;
  console.log("timer " + time1);
  if (time1 > 5) clearInterval(timer);
}, 5000);
*/


/* ------------------------------------------------------------------------------------ */


// to check the current "directory_name" and "file_name"
console.log(__dirname);
console.log(__filename);


/* ------------------------------------------------------------------------------------ */


// normal function statement
function sayHi() {
  console.log("hi");
}

sayHi();

// function expression, assigning a anonymous function to variable "sayBye"
var sayBye = function () {
  console.log("bye");
};

sayBye();

// calling function into another function
function callFunction(fun) {
  fun(); // passing the parameter used in "callFunction"
}

callFunction(sayHi); // calling back of function "sayHi"
