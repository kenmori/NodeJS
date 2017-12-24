const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const index_page = fs.readFileSync('./index.ejs', 'utf8');
const style_page = fs.readFileSync('./style.css', 'utf8');

function getFromClient(request, response){
            var urlparse = url.parse(request.url);
    switch (urlparse.pathname) {
        case '/':

            var content = ejs.render(index_page, {
                title: "Indexページ",
                content: "これはテンプレートを使ったサンプルページです"
            });
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
            break;
        case '/style.css':
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(style_page);
            response.end();
            break;
        default:
            response.writeHead(200, { 'Content-Type' : 'text/plain'});
            response.end('no page');
            break;
    }
}

var server = http.createServer(getFromClient);

server.listen(3000);