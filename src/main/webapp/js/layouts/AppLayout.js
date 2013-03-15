define([
    'backbone',
    'marionette',
    'app',
    'text!bennuTemplates/AppLayout.html'
], function(Backbone, Marionette, App, tpl) {

    return Backbone.Marionette.Layout.extend({

        template: tpl,

        regions: {
            headerRegion: "#header",
            contentRegion: "#content",
            footerRegion: "#footer"
        },

        onShow: function() {
                    require(['views/Header'], function(HeaderView) {
                        var headerView = new HeaderView();
                        App.layout.headerRegion.show(headerView);
                    });
                    require(['views/Footer'], function(FooterView) {
                        App.layout.footerRegion.show(new FooterView());
                    });
        }
    });
});