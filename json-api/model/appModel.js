'use strict';

var _ = require('lodash');

var Data = function(data){
    this.content = data.content;
}

Data.getData = function(result){
    var tst = '{"content" : "test"}';
    result(null, JSON.parse(tst));
}

Data.searchData = function(result){
    var tst = '[ { "text": "Data", "value": "0"}, { "text": "Test", "value": "1"} ]';
    result(null, JSON.parse(tst));
}

Data.queryData = function(query, result){
    // console.log(query.body);
    console.log('Target Value:', _.first(query.body.targets).target);
    console.log(query.body.scopedVars);
    var from = parseInt(query.body.scopedVars.__from.value);
    var to = parseInt(query.body.scopedVars.__to.value);
    var time = Math.round(from + ((to-from)/2));

    console.log('from Timestamp:', from);
    console.log('to Timestamp:', to);
    console.log('time:', time);

    var data = [];
    var datapoint = {};
    datapoint.target = 'data';
    datapoint.datapoints = [[1, time], [2, time+5000]];
    data.push(datapoint);
    
    result(null, data);
}

module.exports = Data;

