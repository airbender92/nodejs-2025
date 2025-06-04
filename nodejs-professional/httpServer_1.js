const http = require('http'); // http module

http.createServer((request, response) => {
    // 1. tell the browser everything is ok (status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // 2. write the annonced text to the body of the page
    response.write('Hello World!\n');
    // 3. tell the server that all of the response headers and body have been sent;
    response.end();
}).listen(1337); // 4. tells the server what port to be on

// 5. run:  node httpServer_1.js
// 6. access http://localhost:1337