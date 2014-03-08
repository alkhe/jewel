Jewel.Text = function(text) {
	this.__identifier = "text";
	this.__text = text || "";
	this.__element = undefined;
};

Jewel.Text.prototype = {
	SetText : function(text) {
		this.__text = text;
		this.__update = true;
	},
	
	GetText : function() {
		return this.__text;
	},
	
	Paint : function() {
		this.__element = document.createElement("div");
		this.Update();
	},
	
	Update : function() {
		if (!this.__element) return;
		var element = this.__element;
		element.innerHTML = this.__text;
	}
};