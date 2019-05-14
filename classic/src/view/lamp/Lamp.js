Ext.define('Mi.view.lamp.Lamp', {
    extend: 'Ext.panel.Panel',
    xtype: 'lamp',
    
    controller: 'lamp',
    
    layout: 'border',

    items: [{
        xtype: 'lampQuery',
    }, {
        xtype: 'lampList',
    }
    ]

});