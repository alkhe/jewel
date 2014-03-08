Jewel.Atom = function(text) {
	this.__identifier = "div";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.Atom.prototype = Jewel.Component.prototype;
