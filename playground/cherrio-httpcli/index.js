const client = require('cheerio-httpcli');
var base = 'http://kenjimorita/category/kenjimorita/'
var url = 'http://kenjimorita.jp/category/kenjimorita/';
var param = {};

//url先のリンクをconsole出力
client.fetch(url, param, function(err, $, res){
    if(err){ console.log("Error:", err); return; }
    var body = $.html();
    $('a').each(function(){
        var text = $(this).text();
        var href = $(this).attr('href');
        console.log(text + ":" + href);
    })
})
