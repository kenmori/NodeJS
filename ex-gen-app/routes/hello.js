var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  var msg = '何か書いて送信してください';
  if (req.session.message != undefined){
    msg = "last message: " + req.session.message; 
  }
  var data = {
    title: 'Hello', 
    content: msg
  };
  res.render('hello', data);
});

router.post('/post', (req, res, next) =>{
  var msg = req.body['message'];
  req.session.message = msg;
  var data = {
    title: 'hello',
    content: 'Last Message: ' + req.session.message 
  }; 
  res.render('hello', data);
});
module.exports = router;
