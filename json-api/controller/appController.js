'use strict';

var Model = require('../model/appModel.js');

exports.getRoot = function(req, res){
    res.sendStatus(200);
}

exports.getJson = function(req, res){
    Model.getData(function(err, data){
        if(err){
            res.send(err);
        } else {
            res.json(data)
        }
    });
}
