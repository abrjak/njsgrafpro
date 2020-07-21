'use strict';

module.exports = function(app){
    var ctrl = require('../controller/appController.js');

    app.route('/json')
        .get(ctrl.getJson)
}