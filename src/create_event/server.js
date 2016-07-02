/**
 *
 * Created by No51 on 2016/07/02.
 */

var http = require('http');

var server = http.createServer(function(req, res){
   res.write('Hello');
   res.end();
})

server.listen(3000);
