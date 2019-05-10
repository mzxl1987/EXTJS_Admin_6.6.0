Ext.define('Mi.controller.AppController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Mi.view.main.Main',
        'Mi.view.user.login.Login',
    ],

    routes: {
        'home': 'home',
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
        var view = Mi.app.getMainView();
        if (view) {
            view.destroy();
        }
        Mi.app.setMainView(v);
    },

    home: function () {
        this.log('Home');
        this.setMainView('Mi.view.main.Main');
    },

    login : function () {
        this.log('Login');
        this.setMainView('Mi.view.user.login.Login');
    },

});