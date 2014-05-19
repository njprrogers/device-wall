/**
 * Created by nickrogers on 16/05/2014.
 */
// get mongo up and running
var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db;

global.BSON = mongo.BSONPure;
var server = new Server('localhost', 27017, {auto_reconnect: true});
global.db = new Db('devicewall', server);


db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'devicedb' database");
        db.collection('devices', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'devices' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
        db.collection('users', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist. Creating it with sample data...");
                populateUserDB();
            }
        });
    }
});
var populateUserDB = function() {

    var users =  [
        {
            "id": 0,
            "name": "Caoimh",
            "email": "caoimh@iqcontent.com",
            "devices": []
        },
        {
            "id": 1,
            "name": "Richey",
            "email": "richey@iqcontent.com",
            "devices": []
        },
        {
            "id": 2,
            "name": "Adrian",
            "email": "adrian@iqcontent.com",
            "devices": []
        },
        {
            "id": 3,
            "name": "Paul",
            "email": "paul@iqcontent.com",
            "devices": []
        }

    ];

    db.collection('users', function(err, collection) {
        collection.insert(users, {safe:true}, function(err, result) {});
    });

};
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var devices = [
        {
            "id": 0,
            "name": "First Iphone",
            "make": "Apple",
            "model": "4",
            "imei": 3456349684323,
            "user_id" : ""
        },
        {
            "id": 1,
            "name": "Second Iphone",
            "make": "Apple",
            "model": "4",
            "imei": 3456349684323,
            "user_id" : ""
        },
        {
            "id": 2,
            "name": "Third Iphone",
            "make": "Apple",
            "model": "4s",
            "imei": 3456349684323,
            "user_id" : ""
        },
        {
            "id": 3,
            "name": "Fourth Iphone",
            "make": "Apple",
            "model": "5",
            "imei": 3456349684323,
            "user_id" : ""
        },
        {
            "id": 4,
            "name": "Fifth Iphone",
            "make": "Apple",
            "model": "5s",
            "imei": 3456349684323,
            "user_id" : ""
        }
    ];

    db.collection('devices', function(err, collection) {
        collection.insert(devices, {safe:true}, function(err, result) {});
    });

};