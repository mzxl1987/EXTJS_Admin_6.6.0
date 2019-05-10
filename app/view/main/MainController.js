Ext.define('EXTJS_Admin_660.view.main.MainController', {
    extend: 'EXTJS_Admin_660.view.base.BaseController',

    alias: 'controller.main',

    routes: {
        // '*': 'onBeforeRoute',
        'home' : 'goHome'
    },

    goHome: function () { 
        this.log('Go Home');
        this.setMainView('EXTJS_Admin_660.view.main.Main');
    },

    onBeforeRoute: function (action, token) {
        var loggedIn;
        var me = this;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        if (loggedIn) {
            action.resume();
        } else { 
            me.redirectTo('login');
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

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});