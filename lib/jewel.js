// ./main.js
window.addEventListener('load', function() {
	Jewel.load();
});

window.Jewel = function(callback) {
	Jewel.$callback = callback;
	Jewel.$containers = [];
};

Jewel.load = function() {
	Jewel.$callback();
};

Jewel.add = function(container) {
	if (Jewel.$containers.indexOf(container) < 0) {
		Jewel.$containers.push(container);
	}
};

Jewel.paint = function() {
	var containers = Jewel.$containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i].$element)) {
			document.body.removeChild(containers[i].$element);
		}
		containers[i].paint();

		if (!document.body.contains(containers[i].$element)) {
			document.body.appendChild(containers[i].$element);
		}
	}
};

Jewel.update = function() {
	var containers = Jewel.$containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].update();
	}
};


// ./core/component.js
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


// ./components/container.js
Jewel.Container = function() {
	this.$identifier = 'div';
	this.$controls = [];
	this.$element = undefined;
};

Jewel.Container.prototype = new Jewel.Component;

Jewel.Container.prototype.add = function(control) {
	if (this.$controls.indexOf(control) < 0) {
		this.$controls.push(control);
		return true;
	}
	return false;
}

Jewel.Container.prototype.update = function() {
	if (!this.$element) return;
	var element = this.$element;
	var controls = this.$controls;
	for (var i = 0, l = controls.length; i < l; i++) {
		if (element.contains(controls[i].$element)) {
			controls[i].update();
		}
		else {
			controls[i].paint();
			element.appendChild(controls[i].$element);
		}
	}
	this.behave();
}


// ./components/span.js
Jewel.Span = function(text) {
	this.$identifier = 'span';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Span.prototype = new Jewel.Component;


// ./components/atom.js
Jewel.Atom = function(text) {
	this.$identifier = 'div';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;


// ./components/button.js
Jewel.Button = function(text) {
	this.$identifier = 'button';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.Button.prototype = new Jewel.Component;


// ./components/textbox.js
Jewel.TextBox = function(text) {
	this.$identifier = 'input';
	this.$first = true;
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.update = function() {
	if (!this.$element) return;
	if (!this.$first) {
		this.text();
	}
	this.$first = false;
	var element = this.$element;
	element.type = 'text';
	element.value = this.$text;
	this.behave();
}


