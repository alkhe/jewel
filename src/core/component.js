Jewel.Component = function() {
	this.__identifier = '';
	this.__text = '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Component.prototype = {
	text: function(text) {
		if (!(text == null || text == undefined)) {
			this.__text = text;
		}
		return this.__text;
	},

	addEvent: function(event, callback) {
		this.__events.push({
			event: event,
			callback: callback
		});
	},

	style: function(styles) {
		if (!(styles == null || styles == undefined)) {
			this.__styles = styles;
		}
		return this.__styles;
	},

	addClass: function(classes) {
		for (var i = 0, l = classes.length; i < l; i++) {
			this.__classes.push(classes[i]);
		}
	},

	removeClass: function(classes) {
		for (var i = 0, l = classes.length; i < l; i++) {
			this.__classes.splice(this.__classes.indexOf(classes[i]));
		}
	},

	paint: function() {
		this.__element = document.createElement(this.__identifier);
		this.update();
	},

	update: function() {
		if (!this.__element) return;
		var element = this.__element;
		element.innerHTML = this.__text;
		this.behave();
	},

	behave: function() {
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
