// creating server

var http = require("http");
var fs = require("fs");

// fs.writeFile('readme.md', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin. Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.', function() {});

// creating a readable stream, which we can read data from
// "__dirname" will get the current directory and concatenating with the "file_name" as it's going to be in this directory
// var myReadStream = fs.createReadStream(__dirname + "/readme.md", "utf-8");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeme.md");

// listen for an event ".on()" of "data" and calling function everytime for receive data of "chunk"
/*
myReadStream.on("data", function (chunk) {
  console.log("new chunk received");
  // console.log(chunk);
  myWriteStream.write(chunk);
});
*/
// PIPES, which is a method
// piping readable to writable Stream, we can't pipe from writable Stream because we cann't read from it
// myReadStream.pipe(myWriteStream);
/*
var server = http.createServer(function (req, res) {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" }); // first parameter is "status" and second is "passing an object" with its value
  // res.end("Hello World!!"); //ending the response and sending it to the browser
  var myReadStream = fs.createReadStream(__dirname + "/readme.md", 'utf-8');
  myReadStream.pipe(res);
});
*/
// serving html pages
/*
var server = http.createServer(function (req, res) {
    console.log("Request was made: " + req.url);
    res.writeHead(200, { "Content-Type": "text/html" }); // first parameter is "status" and second is "passing an object" with its value
    var myReadStream = fs.createReadStream(__dirname + "/index.html", 'utf-8');
    myReadStream.pipe(res);
  });
*/

// serving json data
var server = http.createServer(function (req, res) {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" }); // first parameter is "status" and second is "passing an object" with its value
  var myObj = {
    name: "naorem",
    job: "dev",
    age: 25,
  };

  res.end(JSON.stringify(myObj));
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1");
console.log(`The server is listening in port ${PORT}`);
