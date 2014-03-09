// ./main.js
window.addEventListener("load", function() {
	Jewel.Load();
});

var Jewel = function(callback) {
	Jewel.__callback = callback;
	Jewel.__containers = [];
};

Jewel.Load = function() {
	Jewel.__callback();
};

Jewel.Add = function(container) {
	if (Jewel.__containers.indexOf(container) < 0) {
		Jewel.__containers.push(container);
	}
};

Jewel.Paint = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i].__element)) {
			document.body.removeChild(containers[i].__element);
		}
		containers[i].Paint();
		
		if (!document.body.contains(containers[i].__element)) {
			document.body.appendChild(containers[i].__element);
		}
	}
};

Jewel.Update = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].Update();
	}
};


// ./core/component.js
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


// ./core/container.js
Jewel.Container = function() {
	this.__identifier = "div";
	this.__controls = [];
	this.__element = undefined;
};

Jewel.Container.prototype = new Jewel.Component;

Jewel.Container.prototype.Add = function(control) {
	if (this.__controls.indexOf(control) < 0) {
		this.__controls.push(control);
		return true;
	}
	return false;
}
	
Jewel.Container.prototype.Update = function() {
	if (!this.__element) return;
	var element = this.__element;
	var controls = this.__controls;
	for (var i = 0, l = controls.length; i < l; i++) {
		if (element.contains(controls[i].__element)) {
			controls[i].Update();
		}
		else {
			controls[i].Paint();
			element.appendChild(controls[i].__element);
		}
	}
	this.Behave();
}


// ./input/button.js
Jewel.Button = function(text) {
	this.__identifier = "button";
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Button.prototype = new Jewel.Component;


// ./input/textbox.js
Jewel.TextBox = function(text) {
	this.__identifier = "input";
	this.__first = true;
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.TextBox.prototype = new Jewel.Component;

Jewel.TextBox.prototype.GetText = function() {
	this.SetText(this.__element.value);
	return this.__text;
}

Jewel.TextBox.prototype.Update = function() {
	if (!this.__element) return;
	if (!this.__first) {
		this.GetText();
	}
	this.__first = false;
	var element = this.__element;
	element.type = "text";
	element.value = this.__text;
	this.Behave();
}


// ./output/atom.js
Jewel.Atom = function(text) {
	this.__identifier = "div";
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Atom.prototype = new Jewel.Component;


// ./output/span.js
Jewel.Span = function(text) {
	this.__identifier = "span";
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
};

Jewel.Span.prototype = new Jewel.Component;


