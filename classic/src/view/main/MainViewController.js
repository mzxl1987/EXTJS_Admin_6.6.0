/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mi.view.main.MainViewController', {
    extend: 'Mi.view.base.BaseController',

    alias: 'controller.mainview',

    routes: {
        ':hash' : 'onRouteChange' ,
    },

    setMainView: function (alias) {
        var v = this.getView();
        if (v) {
            v.removeAll();
            v.add(Ext.create({ xtype: alias }));
        }
    },

    onRouteChange: function (hash) { 
        
        if (this.baseRoute.login === hash ) {
            this.setMainView(hash);
        } else if ( this.baseRoute.home === hash) {
            this.setMainView('main');
        }
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onMainViewRender(v,o) { 
        var loggedIn;
        loggedIn = localStorage.getItem("TutorialLoggedIn");        
        this.redirectTo( loggedIn ? 'home' : 'login');
    },

    onLoginClick: function () {
        var me = this;
        
        this.requestPOST(
            'auth/login', null,
            function (resp, ops) {
                me.log(resp);
                var r = Ext.decode(resp.responseText);
                if (r.success) {
                    // Set the localStorage value to true
                    localStorage.setItem("hasLogin", true);
                    me.redirectTo('home');
                } else { 
                    me.toast('用户登录失败! - 请确认用户名密码是否正确.');
                }
            },
            function (resp, ops) {
                me.log(resp);
                me.toast('登录请求失败!');
            },
        );
    }

});
