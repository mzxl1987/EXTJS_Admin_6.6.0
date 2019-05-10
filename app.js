/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Mi',

    extend: 'Mi.Application',

    requires: [
        'Mi.*',
    ],

    controllers: [
        // 'AppController',
    ],

    // defaultToken : 'login',

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    
    mainView: 'Mi.view.main.MainView',

    //-------------------------------------------------------------------------
    // Most customizations should be made to Mi.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
    launch: function () {
        // // It's important to note that this type of application could use
        // // any type of storage, i.e., Cookies, LocalStorage, etc.
        // var loggedIn;

        // // Check to see the current value of the localStorage key
        // loggedIn = localStorage.getItem("TutorialLoggedIn");
        // this.setMainView('Mi.view.user.login.Login');
        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        // Ext.create({
        //     xtype: loggedIn ? 'app-main' : 'login'
        // });
        // this.redirectTo( loggedIn ? 'home' : 'login');
    },
});
