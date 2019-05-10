Ext.define('Mi.view.base.BaseController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.base',

    // requires: ['Ext.window.Toast'],

    preUrl: '/',
    
    baseRoute: {
        login: 'login',
        home:'home',
    },

    down: function(select){
        return App.app.getMainView().down(select);
    },

    toast: function(content,title){
        Ext.toast({
            html: content,
            closable: false,
            align: 't',
            slideDUration: 400,
            maxWidth: 400
        });
    },

    log: function(v){
        console.log(v);
    },

    requestPOST: function(url,params,success,failure){

        var me = this;

        Ext.Ajax.request({
            url: me.preUrl + url,    //访问的URL
            params:params,     //传输的参数
            method:"POST",
            success: success,   //成功时执行的参数
            failure: failure,   //失败时执行的参数
            //useDefaultXhrHeader : false,
            //withCredentials: true,
            //cors:true,   //跨域访问
            //defaultPostHeader: 'application/json',
        });
    },

    requestGET: function(url,params,success,failure){

        var me = this;

        Ext.Ajax.request({
            url: me.preUrl + url,    //访问的URL
            params:params,     //传输的参数
            method:"GET",
            success: success,   //成功时执行的参数
            failure: failure,   //失败时执行的参数
            //useDefaultXhrHeader : false,
            //withCredentials: true,
            //cors:true,   //跨域访问
            //defaultPostHeader: 'application/json',
        });
    },

});
