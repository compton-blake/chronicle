/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app', 'angularAMD'], function(app, angularAMD) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
	        .state('index', {
                url: "/",
                views: {
                    "main": angularAMD.route({
                        templateUrl: 'templates/login.html',
                        controllerUrl: 'controllers/LoginCtrl'
                    }),
                    "header": angularAMD.route({
                        templateUrl: 'templates/layouts/base/_header.html'
                        //controllerUrl: 'controllers/LoginCtrl'
                    }),
                    "footer": angularAMD.route({
                        templateUrl: 'templates/layouts/base/_footer.html'
                        //controllerUrl: 'controllers/LoginCtrl'
                    })
                }
            })
    }])
});