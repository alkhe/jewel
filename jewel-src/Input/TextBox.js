Jewel.TextBox = function(default_text) {
	this.__identifier = "textbox";
	this.__text = default_text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.TextBox.prototype = {
	SetText : function(text) {
		this.__text = text;
	},
	
	__Update : function() {
		this.__text = this.__element.value;
	},
	
	GetText : function() {
		this.__Update();
		return this.__text;
	},
	
	AddEvent : function(event,callback) {
		this.__events.push({
			event : event,
			callback : callback,
		});
	},
	
	Paint : function() {
		this.__element = document.createElement("input");
		this.Update();
	},
	
	Update : function() {
		if (!this.__element) return;
		var element = this.__element;
		element.type = "text";
		element.value = this.__text;
		
		// Events
		var events = this.__events;
		for (var i=0,l=events.length; i<l; i++) {
			element.removeEventListener(events[i].event,events[i].callback);
			element.addEventListener(events[i].event,events[i].callback);
		}
		
		// Update text event
		element.addEventListener("change",this.__Update);
	},
};