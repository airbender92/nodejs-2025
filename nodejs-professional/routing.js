const http = require('http');

const routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Hello World!');
    },
    '/foo': function foo(request, response) {
        response.writeHead(200);
        response.end('you are now viewing foo')
    }
}



http.createServer(function(request, response){
    if(request.url in routes) {
        return routes[request.url](request, response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404])
}).listen(process.env.PORT || 1337);