Ext.define('App.view.lamp.Add', {
    extend: 'Ext.window.Window',
    xtype: 'lampAdd',

    modal:true,
    autoShow: true,
    maximized:false,
    closable: true,
    header: true,

    controller: 'lamp',

    viewModel: {
      data:{
          title: '',
          topLabel: '',
          record:null,
          url:null,
      }
    },

    bind:{
        title : '{title}',
    },

    items: [
        {
            xtype: 'form',
            bodyPadding: '20 20',
            width: 800,
            defaultButton : 'submitButton',
            layout: {
                type: 'column',
            },
            defaults : {
                margin: '5 0 5 10',
                columnWidth:0.25,
                labelAlign:'top',
                selectOnFocus : true,
                maxLength:50,
                xtype:'textfield',
            },
            items: [
                {
                    reference : 'good',
                    xtype: 'label',
                    bind:{
                        text: '{topLabel}',
                    },
                    columnWidth:1,
                },{
                    name:'id',
                    bind:'{record.id}',
                    hidden:true,
                },
                {
                    name:'equipType',
                    fieldLabel:'设备类型 <font color="red"><b>*</b></font>',
                    emptyText:'如:单灯控制器',
                    bind:'{record.equipType}',
                    allowBlank:false,
                },
                {
                    name:'equipNumber',
                    fieldLabel:'设备编号 <font color="red"><b>*</b></font>',
                    emptyText:'如:18888888888',
                    bind:'{record.equipNumber}',
                    allowBlank:false,
                },
                {
                    name:'equipName',
                    fieldLabel:'设备名称 <font color="red"><b>*</b></font>',
                    emptyText:'如:龙山南路#55号灯杆',
                    bind:'{record.equipName}',
                    allowBlank:false,
                },
                {
                    name:'accessWay',
                    fieldLabel:'接入方式 <font color="red"><b>*</b></font>',
                    emptyText:'如:GPRS/3G/4G/NBIOT',
                    bind:'{record.accessWay}',
                    allowBlank:false,
                },
                {
                    name:'manufacturer',
                    fieldLabel:'生产厂家 <font color="red"><b>*</b></font>',
                    emptyText:'如:未来城市',
                    bind:'{record.manufacturer}',
                    allowBlank:false,
                },
                {
                    name:'lampCount',
                    fieldLabel:'灯盏数 <font color="red"><b>*</b></font>',
                    xtype:'numberfield',
                    bind:'{record.lampCount}',
                    minValue:0,
                    maxValue:4,
                    value:1,
                },
                {
                    name:'dimType',
                    fieldLabel:'调光方式',
                    bind:'{record.dimType}',
                    emptyText:'如:PWM',
                },
                {
                    name:'wiringType',
                    bind:'{record.wiringType}',
                    fieldLabel:'接线方式',
                },
                {
                    name:'equipTagNumber',
                    bind:'{record.equipTagNumber}',
                    fieldLabel:'设备标签号',
                },
                {
                    name:'simNumber',
                    bind:'{record.simNumber}',
                    fieldLabel:'SIM卡序列号',
                },
                {
                    name:'mobileNumber',
                    bind:'{record.mobileNumber}',
                    fieldLabel:'手机号',
                },
                {
                    name:'lampType',
                    bind:'{record.lampType}',
                    fieldLabel:'光源类型',
                    emptyText:'如:LED/高压钠灯',
                },
                {
                    name:'serviceLife',
                    bind:'{record.serviceLife}',
                    fieldLabel:'使用年限',
                    xtype:'numberfield',
                    minValue:0,
                    maxValue:100,
                },
                {
                    name:'produceDate',
                    bind:'{record.produceDate}',
                    fieldLabel:'生产日期',
                    xtype:'datefield',
                    format:'Y-m-d H:i:s',
                },
                {
                    name:'remark',
                    bind:'{record.remark}',
                    fieldLabel:'备注',
                    xtype:'textareafield',
                    columnWidth:1,
                    minRows: 4,
                    maxRows: 4,
                    maxLength:200,
                    emptyText:'请填写相关备注信息',
                },
                {
                    columnWidth:1,
                    xtype: 'button',
                    formBind: true,
                    bind:false,
                    reference: 'submitButton',
                    text: '保 存',
                    listeners:{
                        click:'onAddWindowSubmitClick',
                    },
                },
            ]
        }
    ]
});
