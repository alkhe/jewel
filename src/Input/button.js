Jewel.Button = function(text) {
	this.__identifier = "button";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.Button.prototype = Jewel.Component.prototype;
