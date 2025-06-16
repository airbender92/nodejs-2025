var http = require('http');
var https = require('https');
var fs = require('fs');

var httpsOptions = {
    key: fs.readFileSync('./ca-key.pem'),
    cert: fs.readFileSync('./ca-cert.pem')
}

var app = function(req, res) {
    res.writeHead(200);
    res.end('hello world\n');
}
http.createServer(app).listen(8080); //http redirec
https.createServer(httpsOptions, app).listen(4433);

