/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Mi.Application', {
    extend: 'Ext.app.Application',

    name: 'Mi',

    requires: [
        'Mi.*'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    mainView: 'Mi.view.main.MainView',

});
