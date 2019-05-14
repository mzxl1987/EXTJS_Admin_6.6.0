Ext.define('Mi.view.lamp.Query',{
    extend: 'Mi.view.base.BaseQueryPanel',
    xtype: 'lampQuery',

    region:'north',

    controller: 'lamp',

    items: [{
        name: 'equipType',
        reference:'equipType',
        fieldLabel: '设备类型:',
        listeners:{
            change : 'reload',
        }
    },{
        name: 'equipName',
        reference:'equipName',
        fieldLabel: '设备名称:',
        listeners:{
            change : 'reload',
        }
    },{
        name: 'equipNumber',
        reference:'equipNumber',
        fieldLabel: '设备编号:',
        listeners:{
            change : 'reload',
        }
    },{
        xtype:'button',
        margin: '10 0 0 0',
        text: '查询',
        handler: 'reload',
    }],

});