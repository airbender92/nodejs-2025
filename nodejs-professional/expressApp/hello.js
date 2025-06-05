// import the top-level function of express
const express = require('express');

// create an express application using the top-level function
const app = express();

// define port number as 3000
const port = 3000;

// routes http get requests to the specified path '/' with the specified callback function
app.get('/', function(request, response) {
    response.send('Hello, World!');
});

// make the app listen on port 3000
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});

// run: node hello.js