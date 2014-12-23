Jewel.Button = function(text) {
	this.__identifier = 'button';
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Button.prototype = new Jewel.Component;
