const http = require('http');
const fs = require('fs');


var server = http.createServer(getFromClient);

server.listen(3000);


//ここまでメインプログラム
function getFromClient(request, response){
    fs.readFile('index.html', 'UTF-8', (error,data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data.replace(/dummy_title/g, 'タイトル').replace(/dummy_content/g, 'これがコンテンツです'));
        response.end();
    });
}

