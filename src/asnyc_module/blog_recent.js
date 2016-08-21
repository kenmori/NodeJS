var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	if(req.url  == '/'){
		fs.readFile('./titles.json', function(err, data){
			if (err) {
				console.log(err);
				res.end('Server Error');
			} else {
				var titles = JSON.parse(data.toString());
				fs.readFile('./template.html', function(err, data){ 
					if(err {
						console.log(err);
						res.end('Server Error');
					} else {
						var tmpl = data.toStoring();
						var html = tmpl.replace('%', titles.json('</li><li>'));
						res.writeHead(200, {'Content-Type' : 'text/html'});
						res.end(html);//htmlをユーザーに送る
					}
				});
			}
		});
	}	
}).listen(8000, "127.0.0.1");