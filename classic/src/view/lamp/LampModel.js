Ext.define('App.view.lamp.manage.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.lamp',

    stores: {
        iStore: {
            type: 'lampList'
        },
    },

    data:{
        disabledEdit: true,
        disabledDelete: true,
        record:null,
    }

});
