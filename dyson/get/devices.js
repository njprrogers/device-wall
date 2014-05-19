// Please install dyson-generators before uncommenting this endpoint: npm install dyson-generators --save-dev

var g = require('dyson-generators');

module.exports = {
    path: '/devices',
    template:
        [
        {
            "id": 0,
            "name": "First Iphone",
            "make": "Apple",
            "model": "4",
            "imei": 3456349684323
        },
        {
            "id": 1,
            "name": "Second Iphone",
            "make": "Apple",
            "model": "4",
            "imei": 3456349684323
        },
        {
            "id": 2,
            "name": "Third Iphone",
            "make": "Apple",
            "model": "4s",
            "imei": 3456349684323
        },
        {
            "id": 3,
            "name": "Fourth Iphone",
            "make": "Apple",
            "model": "5",
            "imei": 3456349684323
        },
        {
            "id": 4,
            "name": "Fifth Iphone",
            "make": "Apple",
            "model": "5s",
            "imei": 3456349684323
        }
        ]

};

