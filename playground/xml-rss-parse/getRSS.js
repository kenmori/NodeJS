
var RSS = "https://rss-weather.yahoo.co.jp/rss/days/4410.xml";


// var paseString = require('xml2js').parseString;
// var request = require('request');
// request(RSS, function(err, response, body){
//     if(!err && response.statusCode == 200){
//         analyzeRSS(body);
//     }
// });
//
// function analyzeRSS(xml){
//     //conversion to JS Objext
//     paseString(xml, function(err, obj){
//         if(err){console.log(err); return;}
//         console.log(JSON.stringify(obj));
//         var items = obj.rss.channel[0].item;
//         for (var i in items){
//             var item = items[i];
//             console.log(item.title[0]);
//         }
//     })
// }


var client = require('cheerio-httpcli');
client.fetch(RSS, {}, function(err, $, res){
   $('item > title').each(function(ind){
       var title = $(this).text();
       console.dir(title);
   })
})

//
// '【 12日（日） 東京（東京） 】 晴れ - 12℃/0℃ - Yahoo!天気・災害'
// '【 13日（月） 東京（東京） 】 晴後曇 - 11℃/2℃ - Yahoo!天気・災害'
// '【 14日（火） 東京（東京） 】 晴れ - 10℃/2℃ - Yahoo!天気・災害'
// '【 15日（水） 東京（東京） 】 晴れ - 11℃/2℃ - Yahoo!天気・災害'
// '【 16日（木） 東京（東京） 】 晴時々曇 - 13℃/2℃ - Yahoo!天気・災害'
// '【 17日（金） 東京（東京） 】 晴時々曇 - 17℃/4℃ - Yahoo!天気・災害'
// '【 18日（土） 東京（東京） 】 晴時々曇 - 9℃/3℃ - Yahoo!天気・災害'
// '【 ２３区西部 】注意報があります - Yahoo!天気・災害'
// '【 ２３区東部 】注意報があります - Yahoo!天気・災害'
// '【 多摩北部 】注意報があります - Yahoo!天気・災害'
// '【 多摩西部 】注意報があります - Yahoo!天気・災害'
// '【 多摩南部 】注意報があります - Yahoo!天気・災害'
