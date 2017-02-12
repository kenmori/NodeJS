
var http = require('http');
var url = require('url');


function start(){
    function onRequest(request, responce){
        var pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`);
        responce.writeHead(200, {"Content-Type": "text/plain"});
        responce.write("hello world");
        responce.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
start();