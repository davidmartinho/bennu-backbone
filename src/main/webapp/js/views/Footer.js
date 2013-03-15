define([
    'jquery',
    'mustache',
    'backbone',
    'text!bennuTemplates/Footer.html'
], function($, Mustache, Backbone, tpl) {
    return Backbone.Marionette.ItemView.extend({
        template: tpl
    });
});