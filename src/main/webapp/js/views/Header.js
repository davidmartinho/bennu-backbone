define([
    'jquery',
    'underscore',
    'marionette',
    'text!bennuTemplates/Header.html'
], function($, _, Marionette, tpl) {

    return Backbone.Marionette.ItemView.extend({

        template: tpl
    });
});