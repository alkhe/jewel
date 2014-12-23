Jewel.Button = function(text) {
	this._identifier = 'button';
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Button.prototype = new Jewel.Component;
