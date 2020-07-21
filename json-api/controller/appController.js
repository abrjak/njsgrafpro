'use strict';

var Model = require('../model/appModel.js');

exports.getRoot = function(req, res){
    res.sendStatus(200);
}

exports.postQuery = function(req, res){
    Model.queryData(req, function(err, data){
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    })
}

exports.postSearch = function(req, res){
    Model.searchData(function(err, data){
        if(err){
            res.send(err);
        } else {
            res.json(data);
        }
    })
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
