Jewel.Component = function() {
	this.__identifier = "";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.Component.prototype = {
	SetText : function(text) {
		this.__text = text;
	},
	
	GetText : function() {
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
		if (!this.__element) return;
		var element = this.__element;
		element.innerHTML = this.__text;

		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
	}
};
