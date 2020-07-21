'use strict';

var Model = require('../model/appModel.js');

exports.getJson = function(req, res){
    Model.getData(function(err, data){
        if(err){
            res.send(err);
        } else {
            res.json(data)
        }
    });
};
