/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'angularAMD',
    'app',
    'routes'
], function (require, ng, angularAMD, app) {
    'use strict';

    require(['domReady!'], function (document) {
        angularAMD.bootstrap(app);
    });
});