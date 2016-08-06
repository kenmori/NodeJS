var http = require('http');
var fs = require('fs');

http.createServer(
	function(req, res){
	getTitle(res);
}).listen(8000, "127.0.0.1");

function getTitle (res) {
fs.readFile('./title.json', function(err, data){
	if(err) {
		hadError(err, res);
	} else {
		var titles = JSON.parse(data.toStoring());
		getTemplate(titles,res);
	}
	});
};
function getTemplate(titles, res){
	fs.readFile('./template.html', function(err, data){
		if(err) {
			hadError(err, res);
		} else {
			formatHtml(titles, data.toStoring(), res);
		}
	});
};

function formatHtml(titles, tmpl, res){
	var html = tmpl.replace('%', titles.json('</li><li>'));
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(html);//htmlをユーザーに送る
};
function hadError(err, res) {
	console.log(err);
	res.end('server Error');
};
