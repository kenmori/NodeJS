/**
 *
 * Created by No51 on 2016/07/02.
 */

var http = require('http');

var server = http.createServer(function(req, res){
   var url = 'http://kenjimorita.jp';
   var body = '<p>ifafafa' + url + '</p>';
   res.setHeader('Location', url);
   res.setHeader('Content-Length', body.length);
   res.setHeader('Content-Type', 'text/html');
   res.statusCode = 302;
   res.end(body);
})

server.listen(3000);
