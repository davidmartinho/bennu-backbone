require(['jquery', 'jquery.bootstrap', 'backbone', 'mustache', 'marionette', 'app', 'router'], function($, jQueryBootstrap, Backbone, Mustache, Marionette, App, Router) {

    $.ajaxSetup({
        contentType: "application/json; charset=utf-8",
        statusCode : {
            401 : function() {
                // Redirect the to the login page.
                location.pathname = "";
                location.hash = "login";
            },
            403 : function() {
                // 403 -- Access denied
                App.router.navigate("forbidden", true);
            },
            404 : function() {
                // 404 -- NOT FOUND
                App.router.navigate("not-found", true);
            }
        }
    });

    Backbone.Marionette.Renderer.render = Mustache.to_html;

    App.addRegions({
        page: "body"
    });

    App.addInitializer(function() {
        Router.initialize();
        Backbone.history.start();
    });

    App.start();
});