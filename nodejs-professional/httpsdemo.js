const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem')
}

https.createServer(options, (req, res) => {
    res.end('hello https\n');
}).listen(443);