/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mi.view.main.MainController', {
    extend: 'Mi.view.base.BaseController',

    alias: 'controller.main',

    requires: [
        // 'Mi.*',
        // 'Mi.view.lamp.Lamp',
    ],

    preRoute: null,

    routes: {
        ':hash' : 'onRouteChange' ,
    },

    onLogout: function () { 
        localStorage.removeItem('hasLogin');
        this.redirectTo('logout');
    },

    setMainView: function (alias) {
        var v = this.getView();
        if (v) {
            v.removeAll();
            v.add(Ext.create({ xtype: alias }));
        }
    },

    onRouteChange: function (hash) { 
        
        if (Mi.view.base.Base.preRoute === hash) return;

        console.log(' Route : ', hash, Mi.view.base.Base.preRoute);
        Mi.view.base.Base.preRoute = hash;
        console.log(' Route : ', hash, Mi.view.base.Base.preRoute);

        if (this.baseRoute.login != hash && this.baseRoute.home != hash) { 

            if (this.baseRoute.logout == hash) {
                this.redirectTo('login');
            } else { 
                var tab = this.down('center');
                var treelist = this.down('treelist');
                var store = treelist.getStore();
                var node = store.findNode('route', hash);
                var d = node.data;

                tab.add({
                    // xtype:'panel',
                    xtype: d.viewType,
                    title: d.text,
                    // iconCls: d.iconCls,
                })

                    
            }
        }
    },

    onNavigationRender(v, o) { 
        var pressed = true;
        var treelist = this.down('treelist[reference=treelist]'),
            ct = this.down('panel[reference=treelistContainer]');

        treelist.setExpanderFirst(!pressed);
        treelist.setUi(pressed ? 'nav' : null);
        treelist.setHighlightPath(pressed);
        ct[pressed ? 'addCls' : 'removeCls']('treelist-with-nav');

        this.log('onNavigationRender');
        // this.log(v,o);

    },

    onNavItemClick: function (s, i, o) { 
        this.log('onNavItemClick');
        // this.log(s,i,o);
    },

    onNavListFocus: function (l, o) { 
        this.log('onNavListFocus');
        // this.log(l,o);
    },

    onNavListSelectionChange: function (t, r, o) { 
        var d = r.data;
        this.log('onNavListSelectionChange', r, d);
        
        if (d.leaf && d.route) {
            this.redirectTo(d.route);
        }
    }


});
