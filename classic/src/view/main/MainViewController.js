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
        v.removeAll();
        v.add(Ext.create({ xtype:alias }));
    },

    onRouteChange: function (hash) { 
        console.log(hash);

        if (this.baseRoute.login === hash ) {
            this.setMainView(hash);
        } else if ( this.baseRoute.home === hash) {
            this.setMainView('main');
        } else { 

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
        // this.setMainView('Mi.view.user.login.Login');
        
        // Ext.create({
        //     xtype: loggedIn ? 'app-main' : 'login'
        // });
        this.redirectTo( loggedIn ? 'home' : 'login');
    },

    onLoginClick: function () {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        // this.getView().destroy();

        console.log('before Created main')
        // Add the main view to the viewport
        this.redirectTo('home');
    }

});
