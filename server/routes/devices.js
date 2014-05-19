exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving device: ' + id);
    db.collection('devices', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('devices', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addDevice = function(req, res) {
    var device = req.body;
    console.log('Adding device: ' + JSON.stringify(device));
    db.collection('devices', function(err, collection) {
        collection.insert(device, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};

exports.updateDevice = function(req, res) {
    var id = req.params.id;
    var device = req.body;
    console.log('Updating device: ' + id);
    console.log(JSON.stringify(device));
    db.collection('devices', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, device, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating device: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(device);
            }
        });
    });
};

exports.deleteDevice = function(req, res) {
    var id = req.params.id;
    console.log('Deleting device: ' + id);
    db.collection('devices', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
};
