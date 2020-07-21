'use strict';

var Data = function(data){
    this.content = data.content;
}

Data.getData = function(result){
    var tst = '{"content" : "test"}';
    result(null, JSON.parse(tst));
}

module.exports = Data;

