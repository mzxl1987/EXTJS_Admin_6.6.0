Ext.define('Mi.store.base.Base', {
    extend: 'Ext.data.Store',

    alias: 'store.base',

    model:'Mi.model.Base',

    autoLoad: true,

    pageSize:20,

});
