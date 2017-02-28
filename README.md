#NodeJS Sample

## cherrio-httpcli
url先のHTMLページをスクレイピング
[https://www.npmjs.com/package/cheerio-httpcli](https://www.npmjs.com/package/cheerio-httpcli)


HTMLファイルのリンクを抽出

```js
//index.js
var client = require('cherrio-httpcli');
var url = 'http://somepage';
var param = {};

client.fetch(url, param, function(err, $, res){
    if(err){console.log(err); return;}
    $('a').each(function(){
        var text = $(this).text();
        var href = $(this).attr('href');
        console.log(text + ':' + href);
    });
});

node index.js

```