Jewel.Atom = function(text) {
	this.__identifier = "div";
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;
