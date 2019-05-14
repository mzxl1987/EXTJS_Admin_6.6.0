/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mi.view.navigation.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'navigation',

    controller: 'main',
    
    viewModel: 'navigation',
    
    bodyStyle: 'background:#32404e;',
    region: 'west',
    width: 250,
    // split: true,
    reference: 'treelistContainer',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    border: false,
    scrollable: 'y',
    items: [{
        xtype: 'treelist',
        selectOnExpander: true,
        highlightPath:true,
        reference: 'treelist',
        bind: '{navItems}',
        listeners: {
            selectionchange: 'onNavListSelectionChange',
            focus: 'onNavListFocus',
            itemclick: 'onNavItemClick',
        },
    }],

    listeners: {
        render : 'onNavigationRender'
    },

});
