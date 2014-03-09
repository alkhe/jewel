Jewel.Component = function() {
	this.__identifier = "";
	this.__text = "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
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

	SetStyle : function(styles) {
		this.__styles = styles;
	},

	GetStyle: function() {
		return this.__styles;
	},

	AddClass: function(classes) {
		for (var i = 0, l = classes.length; i < l; i++) {
			this.__classes.push(classes[i]);
		}
	},

	RemoveClass: function(classes) {
		for (var i = 0, l = classes.length; i < l; i++) {
			this.__classes.splice(this.__classes.indexOf(classes[i]));
		}
	},

	Paint : function() {
		this.__element = document.createElement(this.__identifier);
		this.Update();
	},
	
	Update : function() {
		if (!this.__element) return;
		var element = this.__element;
		element.innerHTML = this.__text;
		this.Behave();
	},

	Behave : function() {
		if (!this.__element) return;
		var element = this.__element;

		var styles = this.__styles;
		for (var i = 0, l = styles.length; i < l; i++) {
			element.style[styles[i][0]] = styles[i][1];
		}

		var classes = this.__classes;
		for (var i = 0, l = classes.length; i < l; i++) {
			element.classList.add(classes[i]);
		}

		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
	}
};
