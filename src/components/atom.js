Jewel.Atom = function(text) {
	this._identifier = 'div';
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;
