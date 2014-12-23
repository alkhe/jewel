Jewel.Span = function(text) {
	this.__identifier = 'span';
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Span.prototype = new Jewel.Component;
