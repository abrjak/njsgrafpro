'use strict';

module.exports = function(app){
    var ctrl = require('../controller/appController.js');

    app.route('/')
        .get(ctrl.getRoot);

    app.route('/json')
        .get(ctrl.getJson)
}