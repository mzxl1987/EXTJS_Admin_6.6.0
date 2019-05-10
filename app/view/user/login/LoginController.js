Ext.define('EXTJS_Admin_660.view.login.LoginController', {
    extend: 'EXTJS_Admin_660.view.base.BaseController',
    alias: 'controller.login',

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        // this.getView().destroy();

        console.log('before Created main')
        // Add the main view to the viewport
        this.setMainView('EXTJS_Admin_660.view.main.Main');
        console.log('Created main')
    }
});