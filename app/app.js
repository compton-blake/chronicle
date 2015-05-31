/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'angularAMD',
    'uiRouter'
], function (ng, angularAMD) {
    'use strict';

    var app = angular.module("app", ['ui.router'], function() {
        console.log('App Loaded');
    });

    return app;
});