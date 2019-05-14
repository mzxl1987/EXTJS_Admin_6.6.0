Ext.define('Mi.view.lamp.List', {
    extend: 'Mi.view.base.BaseGridPanel',
    xtype: 'lampList',

    region: 'center',

    requires:[
        'Ext.toolbar.Paging',
    ],

    controller: 'lamp',

    viewModel: 'lamp',

    columns: [
        {
            xtype:'rownumberer',
            text: '#',
        },
        {    text: '设备类型',          dataIndex:'equipType',                },
        {    text: '设备编号',          dataIndex:'equipNumber',              },
        {    text: '设备名称',          dataIndex:'equipName',                 },
        {    text: '生产厂家',          dataIndex:'manufacturer',                },
        {    text: '灯盏数量',          dataIndex:'lampCount',                },
        {    text: '调光方式',          dataIndex:'dimType',                },
        {    text: '接线方式',          dataIndex:'wiringType',                },
        {    text: '设备标签',          dataIndex:'equipTagNumber',                },
        {    text: 'SIM卡号',          dataIndex:'simNumber',                },
        {    text: '手机号',          dataIndex:'mobileNumber',                },
        {    text: '光源类型',          dataIndex:'lampType',                },
        {    text: '使用年限',          dataIndex:'serviceLife',                },
        {    text: '生产日期',          dataIndex:'produceDate',                },
        {    text: '接入方式',          dataIndex:'accessWay',                },
        {    text: '备注',          dataIndex:'remark',                },

        {
            text: '创建时间',
            dataIndex:'createDate',
            width:150,
        },
    ],

    listeners: {
        select: "select",
        deselect: "deselect",
    }


});
