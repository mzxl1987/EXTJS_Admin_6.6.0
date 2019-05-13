/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mi.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Mi.view.main.MainController',
        'Mi.view.main.MainModel',
        'Mi.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    items: [{
        xtype: 'head',
    }, {
        flex:1,
            layout: 'border',
            items: [{
                xtype: 'navigation',
            }, {}, {}]
    }]
});
