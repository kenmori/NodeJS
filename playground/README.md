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


#xml-rss-parse
[https://www.npmjs.com/package/xml2js]https://www.npmjs.com/package/xml2js

1 XMLparse

```js
//index.js
var parseString = require('xml2js').parseString;
var xml2js = require('xml2js');

var xml = `
    <fruites shop='AAA'>
        <item price='140'>Bannana</item>
        <item price='200'>Apple</item>
    </fruites>
`;
//XMLをparse
parseString(xml, function(err, result){
    console.dir(JSON.stringify(result));
})
//attribute is "$"
//element content is "_"
//{"fruites":{"$":{"shop":"AAA"},"item":[{"_":"Bannana","$":{"price":"140"}},{"_":"Apple","$":{"price":"200"}}]}}


//JavaScript to XML
var obj = {
    item: {name: "Banana", price: 150}
}
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);

// <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
// <item>
// <name>Banana</name>
// <price>150</price>
// </item>
```

2 RSS

```js
//getRSS.js
var parseString = require('xml2js').parseString;
var xml2js = require('xml2js');

var xml = `
    <fruites shop='AAA'>
        <item price='140'>Bannana</item>
        <item price='200'>Apple</item>
    </fruites>
`;
//XMLをparse
parseString(xml, function(err, result){
    console.dir(JSON.stringify(result));
})
//attribute is "$"
//element content is "_"
//{"fruites":{"$":{"shop":"AAA"},"item":[{"_":"Bannana","$":{"price":"140"}},{"_":"Apple","$":{"price":"200"}}]}}


//JavaScript to XML
var obj = {
    item: {name: "Banana", price: 150}
}
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);

// <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
// <item>
// <name>Banana</name>
// <price>150</price>
// </item>

```