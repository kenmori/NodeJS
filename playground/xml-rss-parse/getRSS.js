
var RSS = "https://rss-weather.yahoo.co.jp/rss/days/4410.xml";


var paseString = require('xml2js').parseString;
var request = require('request');

request(RSS, function(err, response, body){
    if(!err && response.statusCode == 200){
        analyzeRSS(body);
    }
});

function analyzeRSS(xml){
    //conversion to JS Objext
    paseString(xml, function(err, obj){
        if(err){console.log(err); return;}
        console.log(JSON.stringify(obj));
        var items = obj.rss.channel[0].item;
        for (var i in items){
            var item = items[i];
            console.log(item.title[0]);
        }
    })
}