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
    console.log(JSON.stringify(result));
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
