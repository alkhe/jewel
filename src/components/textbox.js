Jewel.TextBox = function(text) {
	this._identifier = 'input';
	this._first = true;
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.update = function() {
	if (!this._element) return;
	if (!this._first) {
		this.text();
	}
	this._first = false;
	var element = this._element;
	element.type = 'text';
	element.value = this._text;
	this.behave();
}
