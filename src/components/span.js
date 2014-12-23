Jewel.Span = function(text) {
	this._identifier = 'span';
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Span.prototype = new Jewel.Component;
