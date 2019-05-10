Ext.define('Mi.view.user.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Mi.view.main.MainViewController',
        'Ext.form.Panel'
    ],

    controller: 'mainview',
    bodyPadding: 10,
    closable: false,
    autoShow: true,
    title: '登录窗口',

    items: [{
    
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }],

    }]
});