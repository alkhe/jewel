Jewel.Component = function() {
	this.$identifier = '';
	this.$text = '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Component.prototype = {
	text: function(text) {
		if (!(text == null || text == undefined)) {
			// text = String(text);
			this.$text = text;
		}
		return this.$text;
	},

	on: function(event, callback) {
		this.$events.push({
			event: event,
			callback: callback
		});
	},

	style: function(styles) {
		if (!(styles == null || styles == undefined)) {
			this.$styles = styles;
		}
		return this.$styles;
	},

	addClass: function(cl) {
		for (var i = 0; i < cl; i++) {
			this.$classes.push(cl[i]);
		}
	},

	removeClass: function(cl) {
		for (var i = 0; i < cl; i++) {
			this.$classes.splice(this.$classes.indexOf(cl[i]));
		}
	},

	paint: function() {
		this.$element = document.createElement(this.$identifier);
		this.update();
	},

	update: function() {
		if (!this.$element) return;
		var el = this.$element;
		el.innerHTML = this.$text;
		this.behave();
	},

	behave: function() {
		if (!this.$element) return;
		var el = this.$element;

		var st = this.$styles;
		for (var i = 0; i < st.length; i++) {
			el.style[st[i][0]] = st[i][1];
		}

		var cl = this.$classes;
		for (var i = 0; i < cl.length; i++) {
			el.classList.add(cl[i]);
		}

		var events = this.$events;
		for (var i = 0; i < events.length; i++) {
			el.removeEventListener(events[i].event, events[i].callback);
			el.addEventListener(events[i].event, events[i].callback);
		}
	}
};
