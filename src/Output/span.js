Jewel.Span = function(text) {
	this.__identifier = "span";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.Span.prototype = Jewel.Component.prototype;
