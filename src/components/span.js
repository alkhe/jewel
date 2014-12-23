Jewel.Span = function(text) {
	this.$identifier = 'span';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Span.prototype = new Jewel.Component;
