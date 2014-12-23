Jewel.Button = function(text) {
	this.$identifier = 'button';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Button.prototype = new Jewel.Component;
