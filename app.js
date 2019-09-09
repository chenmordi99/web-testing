const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Account = require('./models/account/Account');

mongoose.connect('mongodb://localhost:27017/codeTest', {
	autoReconnect: true,
	reconnectTries: 60,
	reconnectInterval: 10000,
	useNewUrlParser: true
});

const app = express();
app.listen(3000);

app.use(bodyParser.urlencoded({extended: true}));
//1.1
app.post('/account/create', require('./api/account/create')); 

//2.1
app.post('/notification', require('./api/notification/create'));

//2.2
app.get('/notification', require('./api/notification/fetch')); 


console.log('app running on port 3000...');

module.exports = app;
