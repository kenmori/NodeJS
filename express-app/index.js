var express = require('express');
var ejs = require('ejs');
var app = express();

app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));
app.get('/', (req, res) => {
	var url = '/other?name=fafa&pass=4890';
	var msg = 'This is Express Page!<br>' + 'これはスタイルシートを利用した例です';
    res.render('index.ejs', {title: 'Index', content: msg, link: {text: '別ページに移動', href:url} });
});

app.get('/other', (req, res) => {
	var name = req.query.name;
	var pass = req.query.pass;
	var msg = 'あなたの名前は' + name +  'です' + 'パスワードは' + pass +'です';
    res.render('index.ejs', {title: 'other', content: msg, link: {text: '別ページに移動', href:'/' } });
});
var server = app.listen(3000, ()=> {
    console.log('Start server port:3000');
});




