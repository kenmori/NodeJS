var fs = require('fs');
var http = require('http');


var url = 'http://kenjimorita.jp/';
var savePath = 'test.html';

var out = fs.createWriteStream(savePath);

http.get (url, function (res){
  res.pipe(out);//writeStream
  res.on('end', function (){
    out.close();
      console.log('done');
  });
});
