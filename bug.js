const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code has a bug in it.  The server does not handle errors properly, it will crash without a message if it is unable to bind to port 8080.

//This bug is uncommon because many developers only check for errors when there is a failure in performing an operation, such as writing to a file or querying a database. The issue in the above code is very specific to the HTTP server's ability to bind to a port, and in most cases, the default behavior of Node.js is sufficient to handle errors during the execution of a function. However, the server may be running already in another process, the port may be reserved for another process, or a system administrator may block the application from running on that port.  In this case the default behavior will be that the program will crash, without a log message. In production environments this can lead to unplanned down time.

//Other uncommon bugs include race conditions in asynchronous code, memory leaks resulting from circular references, unhandled exceptions in event emitters, incorrect usage of timers, incorrect usage of Node.js Streams, and many other issues. Many errors in Node.js are asynchronous and can happen deep within a call stack, making it difficult to debug them.