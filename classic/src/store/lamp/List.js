Ext.define('Mi.store.lamp.List', {
    extend: 'Mi.store.base.Base',

    alias: 'store.lampList',

    pageSize:25,

    proxy: {
        type: 'ajax',
        url: Mi.view.base.Base.preUrl + 'lamp/queryByPage',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total',
            successProperty: 'success',
        },
    },

});
