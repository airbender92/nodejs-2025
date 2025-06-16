'use strict';

var tls = require('tls');
var fs = require('fs');

const PORT = 1337;
const HOST = '127.0.0.1';

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized: false,
}

var client = tls.connect(PORT, HOST, options, function(){
    if(client.authorized) {
        console.log("Connection authorized by a Certificate Authority")
    } else {
        console.log("Connection not authorized by a Certificate Authority")
    }

    client.write("I am the client sending you a message");

});

client.on('data', function(data){
    console.log("Client received: " + data);
    // close the connection after receiving the message
    client.end();
});

client.on('close', function(){
    console.log("Client connection closed");
})

client.on('error', function(err){
    console.log("Client error: " + err);
    // close the connection after receiving the message 
    client.destroy();
})