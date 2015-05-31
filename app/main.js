require.config({

    paths: {
    	'domReady': '../static/modules/js/requirejs-domready/domReady',
        'jquery': '../static/modules/js/jquery/jquery',
        'angular': '../static/modules/js/angular/angular',
        'angularAMD': '../static/modules/js/angularAMD/angularAMD',
        'uiRouter': '../static/modules/js/ui-router/angular-ui-router'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        },
        'angularAMD': {
            deps: ['angular']   
        },
    },

    deps: ['bootstrap']
});