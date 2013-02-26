define([
	'jquery',
	'mustache',
	'backbone',
	'text!bennuTemplates/NotFound.html'
], function($, Mustache, Backbone, tpl) {
	
    return Backbone.Marionette.CompositeView.extend({
        template: tpl
	});
});
