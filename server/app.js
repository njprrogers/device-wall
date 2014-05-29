var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./routes/db');
var cors = require('cors');

var devices = require('./routes/devices'),
    users = require('./routes/users');
//app.all('/*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  next();
//});
app.use(cors());
app.options('*', cors()); // include before other routes
//app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser());

app.get('/api/devices', devices.findAll);
app.get('/api/devices/:id', devices.findById);

app.post('/api/devices/:id', devices.updateDevice);
app.post('/api/devices', devices.addDevice);

app.put('/api/devices/:id', devices.updateDevice);
app.delete('/api/devices/:id', devices.deleteDevice);

app.get('/api/users', users.findAll);
app.get('/api/user/:id', users.findById);
app.post('/api/users', users.addUser);
app.put('/api/user/:id', users.updateUser);
app.delete('/api/user/:id', users.deleteUser);

app.listen(3000);
console.log('Listening on port 3000...');