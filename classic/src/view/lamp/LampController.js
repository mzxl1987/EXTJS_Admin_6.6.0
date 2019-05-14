Ext.define('Mi.view.lamp.LampController', {
    extend: 'Mi.view.base.BaseController',

    alias: 'controller.lamp',


    onBtnAddClick: function(){
        var me = this;
        var window = Ext.create({
            xtype: 'lampAdd',
        });

        var vm = window.getViewModel();

        vm.setData({
            title: '添加单灯',
            topLabel: '创建单灯控制器',
            url: App.view.base.Base.preUrl +  'lamp/add',
        });

        me.log("Add");
    },


    onBtnEditClick: function(){
        var me = this;
        var list = me.down('lampManageL');
        var models = list.getSelection();
        var record = models[0].data;

        var window = Ext.create({
            xtype: 'lampAdd',
        });

        var vm = window.getViewModel();

        vm.setData({
            title: '编辑单灯',
            topLabel: '编辑单灯控制器信息',
            url: App.view.base.Base.preUrl +  'lamp/edit',
            record:record,
        });

        me.log("Edit");

    },

    onBtnDeleteClick: function(){
        console.log("Delete");

        var me = this;
        var inbox = me.down('inbox');
        var list = me.down('lampManageL');
        var models = list.getSelection();

        var ids = "";

        var i = 0,max = models.length;
        for(; i < max ; i++){
            ids += models[i].data.id + ",";
        }

        Ext.MessageBox.confirm('确认信息','确认要删除信息吗?',function(){
            me.requestPOST(
                'lamp/delete',
                {
                    id:ids,
                },
                function(response, opts) {

                    var obj = Ext.decode(response.responseText);

                    me.log(obj);

                    if(obj.success){
                        me.reload();
                        me.toast("删除成功");
                    }else{
                        me.toast("XXX 删除失败 XXX");
                    }
                },
                function(response, opts) {
                    me.log(opts);
                    me.toast("CONNECT FAIL");
                }
            );
        });
    },

    reload: function(){
        var me = this;
        var list = me.down('lampManageL');
        var q = me.down('lampManageQ');
        var params = this.getQueryParams(q);
        list.getStore().on('load',function( store, records, successful, operation, eOpts ){
            me.selectChange(list);
        });
        list.reload(params);
    },

    onAddWindowSubmitClick: function(){

        console.log("Add Win Submit");

        var me = this;
        var win = me.getView();
        var vm = win.getViewModel();
        var url = vm.get("url");
        var formpanel = win.down('form');

        if(formpanel.isValid()){
            formpanel.getForm().submit({
                url:url,
                submitEmptyText: false,
                success: function(form, action) {
                    if(action.result.success){
                        me.reload();
                        win.close();
                        me.toast("保存成功");
                    }else{
                        console.log(action);
                        me.toast("数据保存失败");
                    }

                },
                failure: function(form, action) {
                    console.log(action);
                    me.toast("CONNECTION FAIL");
                }
            });
        }
    },

    getQueryParams: function(v){
        var params = {};
        params.equipType = v.down('textfield[reference=equipType]').getValue();
        params.equipName = v.down('textfield[reference=equipName]').getValue();
        params.equipNumber = v.down('textfield[reference=equipNumber]').getValue();
        return params;
    },

    selectChange: function(grid){
        var me = this;
        var selectCount = grid.getSelection().length;

        var viewModel = grid.getViewModel();
        viewModel.setData({
            disabledEdit : selectCount != 1,
            disabledDelete : selectCount == 0,
        });
    },

    select: function ( selectModelType, selected, eOpts )
    {
        var me = this;
        var grid = me.down('lampManageL');
        me.log("select");
        me.selectChange(grid);
    },
    deselect: function ( selectModelType, records, eOpts )
    {
        var me = this;
        var grid = me.down('lampManageL');
        me.log("deselect");
        me.selectChange(grid);
    },

});
