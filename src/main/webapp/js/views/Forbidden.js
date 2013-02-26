define([
	'jquery',
	'mustache',
	'backbone',
	'text!bennuTemplates/Forbidden.html'
], function($, Mustache, Backbone, tpl) {
	
    return Backbone.Marionette.CompositeView.extend({
        template: tpl
	});
});
