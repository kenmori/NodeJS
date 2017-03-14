var fs = require('fs');
var CSV = require('comma-separated-values');
var Iconv = require('iconv').Iconv;

//Shift_JISをUTF-8に変換するオブジェクトを生成

var iconv = new Iconv('SHIFT_JIS', 'UTF-8');
//Shift_JISに変換

var buf = fs.readFileSync("test.CSV");
var txt = iconv.convert(buf).toString("utf-8");

//CSVファイルをパースする
var csv  = new CSV(txt, {header: false});//false : returns二次元配列, true: returns Object
var records = csv.parse();

//一行目はヘッダなので捨てる
records.shift();


//結果を出力する
records.forEach(function(ele, i){
    var fs = records[i];
    var name = fs[0];
    var price = fs[1];
    var memo = fs[2];
    console.log(name, price, memo);

})