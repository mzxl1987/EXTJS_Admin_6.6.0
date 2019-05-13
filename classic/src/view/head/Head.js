/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mi.view.head.Head', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'head',

    controller: 'main',
    
    cls: 'sencha-dash-dash-headerbar shadow',
    height: 64,
    itemId: 'headerBar',
    items: [
        {
            bodyStyle: 'background:#32404e;',
            xtype: 'component',
            reference: 'senchaLogo',
            cls: 'sencha-logo',
            html: '<div class="main-logo"><img src="resources/images/company-logo.png">未来城市单灯管理系统</div>',
            width: 250
        },, {
            // text: 'Micro',
            enableToggle:true,
            iconCls: 'x-fa fa-navicon',
            toggleHandler: 'onToggleMicro'
        },
        '->',
        {
            iconCls: 'x-fa fa-sign-out',
            tooltip: '注销',
            handler: 'onLogout',
        }, {
            xtype: 'tbtext',
            reference: 'realName',
            cls: 'top-user-name'
        },
        {
            xtype: 'image',
            name: 'headerImg',
            reference: 'headerImg',
            cls: 'header-right-profile-image',
            height: 35,
            width: 35,
            alt: '用户头像',
            src: 'resources/images/company-logo.png',
        }
    ]

});
