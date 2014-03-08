Jewel.TextBox = function(default_text) {
	this.__identifier = "input";
	this.__text = default_text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.TextBox.prototype = {
	SetText : function(text) {
		this.__text = text;
	},
	
	GetText : function() {
		this.SetText(this.__element.value);
		return this.__text;
	},
	
	AddEvent : function(event, callback) {
		this.__events.push({
			event : event,
			callback : callback
		});
	},
	
	Paint : function() {
		this.__element = document.createElement(this.__identifier);
		this.Update();
	},
	
	Update : function() {
		if (!this.__element)
			return;
		this.GetText();
		var element = this.__element;
		element.type = "text";
		element.value = this.__text;
		
		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
	}
};
