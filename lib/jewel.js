// ./main.js
window.addEventListener('load', function() {
	Jewel.load();
});

window.Jewel = function(callback) {
	Jewel._callback = callback;
	Jewel._containers = [];
};

Jewel.load = function() {
	Jewel._callback();
};

Jewel.add = function(container) {
	if (Jewel._containers.indexOf(container) < 0) {
		Jewel._containers.push(container);
	}
};

Jewel.paint = function() {
	var containers = Jewel._containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i]._element)) {
			document.body.removeChild(containers[i]._element);
		}
		containers[i].paint();

		if (!document.body.contains(containers[i]._element)) {
			document.body.appendChild(containers[i]._element);
		}
	}
};

Jewel.update = function() {
	var containers = Jewel._containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].update();
	}
};


// ./core/component.js
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


// ./components/container.js
Jewel.Container = function() {
	this._identifier = 'div';
	this._controls = [];
	this._element = undefined;
};

Jewel.Container.prototype = new Jewel.Component;

Jewel.Container.prototype.add = function(control) {
	if (this._controls.indexOf(control) < 0) {
		this._controls.push(control);
		return true;
	}
	return false;
}

Jewel.Container.prototype.update = function() {
	if (!this._element) return;
	var element = this._element;
	var controls = this._controls;
	for (var i = 0, l = controls.length; i < l; i++) {
		if (element.contains(controls[i]._element)) {
			controls[i].update();
		}
		else {
			controls[i].paint();
			element.appendChild(controls[i]._element);
		}
	}
	this.behave();
}


// ./components/span.js
Jewel.Span = function(text) {
	this._identifier = 'span';
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Span.prototype = new Jewel.Component;


// ./components/atom.js
Jewel.Atom = function(text) {
	this._identifier = 'div';
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;


// ./components/button.js
Jewel.Button = function(text) {
	this._identifier = 'button';
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.Button.prototype = new Jewel.Component;


// ./components/textbox.js
Jewel.TextBox = function(text) {
	this._identifier = 'input';
	this._first = true;
	this._text = text || '';
	this._element = undefined;
	this._id = '';
	this._classes = [];
	this._events = [];
	this._styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.update = function() {
	if (!this._element) return;
	if (!this._first) {
		this.text();
	}
	this._first = false;
	var element = this._element;
	element.type = 'text';
	element.value = this._text;
	this.behave();
}


