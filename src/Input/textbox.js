Jewel.TextBox = function(text) {
	this.__identifier = "input";
	this.__first = true;
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.GetText = function() {
	this.SetText(this.__element.value);
	return this.__text;
}

Jewel.TextBox.prototype.Update = function() {
	if (!this.__element) return;
	if (!this.__first) {
		this.GetText();
	}
	this.__first = false;
	var element = this.__element;
	element.type = "text";
	element.value = this.__text;
	this.Behave();
}
