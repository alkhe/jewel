Jewel.TextBox = function(text) {
	this.$identifier = 'input';
	this.$first = true;
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.update = function() {
	if (!this.$element) return;
	if (!this.$first) {
		this.text();
	}
	this.$first = false;
	var element = this.$element;
	element.type = 'text';
	element.value = this.$text;
	this.behave();
}
