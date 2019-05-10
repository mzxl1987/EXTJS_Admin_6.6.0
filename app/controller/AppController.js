Ext.define('EXTJS_Admin_660.controller.AppController', {
    extend: 'Ext.app.Controller',

    routes: {
        // '*' : 'onBeforeToken' ,
        'home': 'goHome',
        'login' : 'login',
    },

    listen: {
        global: {
            unmatchedroute: 'onUnmatchedRoute'
        }
    },

    log: function (v) {
        console.log(v);
    },

    onUnmatchedRoute: function (token) { 
        Ext.toast({
            html: "无效路由",
            closable: false,
            align: 't',
            slideDUration: 400,
            maxWidth: 400
        });
    },

    onBeforeToken: function (action) {
        // var store = Ext.getStore('Settings');

        // if (store.loaded) {
            action.resume();
        // } else {
        //     store.on('load', action.resume, action, { single: true });
        // }
    },

    setMainView: function (v) {
        this.getView().destroy();
        EXTJS_Admin_660.app.setMainView(v);
    },

    goHome: function () {
        this.log('Go Home');
        this.setMainView('EXTJS_Admin_660.view.main.Main');
    },

    login : function () {
        this.log('Go Home');
        this.setMainView('EXTJS_Admin_660.view.main.Main');
    },

});