var express = require('express');
var app = express();
console.log('here');
require('./routes/db');
console.log('here');

var devices = require('./routes/devices'),
    users = require('./routes/users');

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.get('/api/devices', devices.findAll);
app.get('/api/devices/:id', devices.findById);
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