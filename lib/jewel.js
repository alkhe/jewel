// ./main.js
window.addEventListener('load', function() {
	Jewel.load();
});

window.Jewel = function(callback) {
	Jewel.__callback = callback;
	Jewel.__containers = [];
};

Jewel.load = function() {
	Jewel.__callback();
};

Jewel.add = function(container) {
	if (Jewel.__containers.indexOf(container) < 0) {
		Jewel.__containers.push(container);
	}
};

Jewel.paint = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i].__element)) {
			document.body.removeChild(containers[i].__element);
		}
		containers[i].paint();

		if (!document.body.contains(containers[i].__element)) {
			document.body.appendChild(containers[i].__element);
		}
	}
};

Jewel.update = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].update();
	}
};


// ./core/component.js
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
			// text = String(text);
			this.__text = text;
		}
		return this.__text;
	},

	on: function(event, callback) {
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
		var el = this.__element;

		var styles = this.__styles;
		for (var i = 0; i < styles.length; i++) {
			el.style[styles[i][0]] = styles[i][1];
		}

		var classes = this.__classes;
		for (var i = 0; i < classes.length; i++) {
			el.classList.add(classes[i]);
		}

		var events = this.__events;
		for (var i = 0; i < events.length; i++) {
			el.removeEventListener(events[i].event, events[i].callback);
			el.addEventListener(events[i].event, events[i].callback);
		}
	}
};


// ./components/container.js
Jewel.Container = function() {
	this.__identifier = 'div';
	this.__controls = [];
	this.__element = undefined;
};

Jewel.Container.prototype = new Jewel.Component;

Jewel.Container.prototype.add = function(control) {
	if (this.__controls.indexOf(control) < 0) {
		this.__controls.push(control);
		return true;
	}
	return false;
}

Jewel.Container.prototype.update = function() {
	if (!this.__element) return;
	var element = this.__element;
	var controls = this.__controls;
	for (var i = 0, l = controls.length; i < l; i++) {
		if (element.contains(controls[i].__element)) {
			controls[i].update();
		}
		else {
			controls[i].paint();
			element.appendChild(controls[i].__element);
		}
	}
	this.behave();
}


// ./components/span.js
Jewel.Span = function(text) {
	this.__identifier = 'span';
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Span.prototype = new Jewel.Component;


// ./components/atom.js
Jewel.Atom = function(text) {
	this.__identifier = 'div';
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;


// ./components/button.js
Jewel.Button = function(text) {
	this.__identifier = 'button';
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Button.prototype = new Jewel.Component;


// ./components/textbox.js
Jewel.TextBox = function(text) {
	this.__identifier = 'input';
	this.__first = true;
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.update = function() {
	if (!this.__element) return;
	if (!this.__first) {
		this.text();
	}
	this.__first = false;
	var element = this.__element;
	element.type = 'text';
	element.value = this.__text;
	this.behave();
}


