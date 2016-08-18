/**
 *
 * Created by No51 on 2016/07/02.
 */


var net =  require('net');
var server = net.createServer(function(socket){
   socket.on('data', function(data){
      socket.write(data);
   });
});

server.listen(8888);
