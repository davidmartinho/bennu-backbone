define([
    'jquery',
    'mustache',
    'backbone',
    'app',
    'appLayout',
    'router',
    'text!bennuTemplates/Login.html'
], function($, Mustache, Backbone, App, AppLayout, Router,tpl) {

    return Backbone.Marionette.CompositeView.extend({

        template: tpl,

        events: {
            "click #login-button": "login"
        },

        login: function(e) {
            e.preventDefault();
            var username = $('input[name=username]', this.el).val();
            var password = $('input[name=password]', this.el).val();
            if(username === "" || password === "") {
                App.showError("You must fill your credentials");
            } else {
                $.post('api/login', { username: username, password: password }).done(
                    function() {
                        App.page.show(App.layout);
                        App.router.navigate("#", true);
                });
            }
        }
    });
});