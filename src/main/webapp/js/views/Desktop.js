define([
	'jquery',
	'mustache',
	'backbone',
	'text!bennuTemplates/Desktop.html'
], function($, Mustache, Backbone, tpl) {
    return Backbone.Marionette.CompositeView.extend({
        template: tpl
	});
});
