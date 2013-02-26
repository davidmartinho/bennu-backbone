define([
	'jquery',
	'mustache',
	'backbone',
	'text!bennuTemplates/Spinner.html'
], function($, Mustache, Backbone, tpl) {
	
    return Backbone.Marionette.CompositeView.extend({
        template: tpl,

		hide: function() {
			$('#spinner').delay(1000).fadeOut(function() {
				$(this).remove();
			});
		}
	});
});
