Jewel.Component = function() {
	this._identifier = '';
	this._text = '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Component.prototype = {
	text: function(text) {
		if (!(text == null || text == undefined)) {
			// text = String(text);
			this._text = text;
		}
		return this._text;
	},

	on: function(event, callback) {
		this._events.push({
			event: event,
			callback: callback
		});
	},

	style: function(styles) {
		if (!(styles == null || styles == undefined)) {
			this._styles = styles;
		}
		return this._styles;
	},

	addClass: function(classes) {
		for (var i = 0, l = classes.length; i < l; i++) {
			this._classes.push(classes[i]);
		}
	},

	removeClass: function(classes) {
		for (var i = 0, l = classes.length; i < l; i++) {
			this._classes.splice(this._classes.indexOf(classes[i]));
		}
	},

	paint: function() {
		this._element = document.createElement(this._identifier);
		this.update();
	},

	update: function() {
		if (!this._element) return;
		var element = this._element;
		element.innerHTML = this._text;
		this.behave();
	},

	behave: function() {
		if (!this._element) return;
		var el = this._element;

		var styles = this._styles;
		for (var i = 0; i < styles.length; i++) {
			el.style[styles[i][0]] = styles[i][1];
		}

		var classes = this._classes;
		for (var i = 0; i < classes.length; i++) {
			el.classList.add(classes[i]);
		}

		var events = this._events;
		for (var i = 0; i < events.length; i++) {
			el.removeEventListener(events[i].event, events[i].callback);
			el.addEventListener(events[i].event, events[i].callback);
		}
	}
};
