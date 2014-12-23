Jewel.Atom = function(text) {
	this.$identifier = 'div';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;
