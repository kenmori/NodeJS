#NodeJS Sample

## cherrio-httpcli
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

```
run

```
node index.js
```

任意のページの全ての画像を生成したフォルダ内にダウンロード

```js
var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var URL = require('url');

var savedir =  __dirname + "/img";
if(!fs.existsSync(savedir)){
    fs.mkdirSync(savedir);
}

//wikipediaのイヌのページにあるimgを作成したディレクトリ内にダウンロード
var url = 'https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C';
var param = {};

client.fetch(url, param, function(err, $, res){
    if(err){console.log(err); return;}
    $('img').each(function(ind){
        var src = $(this).attr('src');
        src = URL.resolve(url, src);
        var fname = URL.parse(src).pathname;
        fname = savedir + "/"  + fname.replace(/[^a-zA-Z0-9\.]/g, '_');
        request(src).pipe(fs.createWriteStream(fname));
    })
})
```

run

```
node downloadImage.js
```