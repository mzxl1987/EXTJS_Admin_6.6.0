Ext.define('Mi.view.user.login.LoginController', {
    extend: 'Mi.view.base.BaseController',
    alias: 'controller.login',

    onLoginClick: function () {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        // this.getView().destroy();

        console.log('before Created main')
        // Add the main view to the viewport
        // this.redirectTo('home');

        this.requestPOST(
            'auth/login', null,
            function (resp, ops) {
                var obj = Ext.decode(response.responseText);
             },
            function (resp, ops) { 
                var obj = Ext.decode(response.responseText);
            },
        );

    }
});