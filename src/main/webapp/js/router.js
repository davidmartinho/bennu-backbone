define([
    'jquery',
    'underscore',
    'mustache',
    'backbone',
    'marionette',
    'app',
    'appLayout'
], function($, _, Mustache, Backbone, Marionette, App, AppLayout) {

    var Router = Backbone.Marionette.AppRouter.extend({

        initialize: function() {
            App.layout = new AppLayout();
            App.layout.render();
            App.page.show(App.layout);
        },

        appRoutes: {
            "" : "showDesktop",
			"login" : "login",
			"logout" : "logout"
        },

        controller: {

            showDesktop: function() {
                require(['views/Desktop'], function(DesktopView) {
                    App.layout.contentRegion.show(new DesktopView());
                });
            },

			login: function() {
				require(['views/Login'], function(LoginView) {
					App.page.show(new LoginView());
				});
			},
			
			logout: function() {

			}
        }

    });

    var initialize = function() {
        if(App.router === undefined) {
            App.router = new Router();
        }
    }

    return {
        initialize: initialize
    }

});