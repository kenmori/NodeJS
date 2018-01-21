var express = require('express');
var router = express.Router();


var data = [
 {name: 'morita', age: 20, mail: 'eee@com'},
 {name: 'kenji', age: 37, mail: 'fafa@com'},
 {name: 'keiko', age: 44, mail: 'keiko@com'}
];

router.get('/', (req, res, next )=> {
  var n = req.query.id;
  console.log(data[n]);
  res.json(data[n]);
});

module.exports = router;
