/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mi.view.main.MainController', {
    extend: 'Mi.view.base.BaseController',

    alias: 'controller.main',

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
        console.log(' main ', hash);

        if (this.baseRoute.login != hash && this.baseRoute.home != hash) { 
            if (this.baseRoute.logout == hash) { 
                this.redirectTo('login');
            }
        }
    },

    onToggleMicro: function (button, pressed) {
        var treelist = this.down('treelist[reference=treelist]'),
            ct = treelist.ownerCt;

        treelist.setMicro(pressed);

        this.log(this.oldWidth);

        if (pressed) {
            // navBtn.setPressed(true);
            // navBtn.disable();
            this.oldWidth = ct.width;
            ct.setWidth(44);
        } else {
            ct.setWidth(250);
            // navBtn.enable();
        }

        if (Ext.isIE8) {
            this.repaintList(treelist, pressed);
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

    repaintList: function (treelist, microMode) {
        treelist.getStore().getRoot().cascade(function (node) {
            var item, toolElement;

            item = treelist.getItem(node);

            if (item && item.isTreeListItem) {
                if (microMode) {
                    toolElement = item.getToolElement();

                    if (toolElement && toolElement.isVisible(true)) {
                        toolElement.syncRepaint();
                    }
                }
                else {
                    if (item.element.isVisible(true)) {
                        item.iconElement.syncRepaint();
                        item.expanderElement.syncRepaint();
                    }
                }
            }
        });
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
        this.log('onNavListSelectionChange',r);
        var d = r.data;
        if (d.leaf) {
            this.redirectTo(d.route);
        } else { 
            
        }
    }


});
