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

app.post('/account/create', require('./api/account/create')); //task1



console.log('app running on port 3000...');
module.exports = app;
