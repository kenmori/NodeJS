var http = require('http');
var url = require('url');
var setting = require('./setting');
var jsonUrl = 'http://qiita.com/M-ISO/items/4cd183e2496c2937a53e.json';

var server = http.createServer();

server.on('request', function(req, res){
        var body = '';
        res.writeHead(200);
        var parseUrl = url.parse("http://" + setting.IP + ":" + setting.PORT + req.url);
        if(parseUrl.pathname === "/"){
            res.write("top page here!!")
        } else if (parseUrl.pathname === "/test") {
            res.write("test page here!!");
        } else {
            res.write("404");
        }
        res.end();

    });

server.listen(setting.PORT, setting.IP, setting.startServer);

// res.on('data', (chunk)=>{
//     body += chunk;
// });
// res.on('end', (res) =>{
//     res = JSON.parse(body);
// console.log(res);
// })