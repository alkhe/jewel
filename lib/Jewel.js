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
	this.__text = text || "";
	this.__element = undefined;
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

	SetStyle : function(key, value) {
		this.__styles.push({
			key : key,
			value : value
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

		var styles = this.__styles;

		for (var i = 0, l = styles.length; i < l; i++) {
			element.style[styles[i].key] = styles[i].value;
		}

		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
	}
};


// ./input/button.js
Jewel.Button = function(text) {
	this.__identifier = "button";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
	this.__styles = [];
};

Jewel.Button.prototype = Jewel.Component.prototype;


// ./input/textbox.js
Jewel.TextBox = function(default_text) {
	this.__identifier = "input";
	this.__text = default_text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.TextBox.prototype = {
	SetText : function(text) {
		this.__text = text;
	},
	
	GetText : function() {
		this.SetText(this.__element.value);
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
		if (!this.__element)
			return;
		this.GetText();
		var element = this.__element;
		element.type = "text";
		element.value = this.__text;
		
		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
	}
};


// ./main/container.js
Jewel.Container = function() {
	this.__identifier = "div";
	this.__controls = [];
	this.__element = undefined;
};

Jewel.Container.prototype = {
	Add : function(control) {
		if (this.__controls.indexOf(control) < 0) {
			this.__controls.push(control);
			return true;
		}
		return false;
	},
	
	Paint : function() {
		this.__element = document.createElement(this.__identifier);
		this.Update();
	},
	
	Update : function() {
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
	}
};


// ./output/atom.js
Jewel.Atom = function(text) {
	this.__identifier = "div";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
	this.__styles = [];
};

Jewel.Atom.prototype = Jewel.Component.prototype;


// ./output/span.js
Jewel.Span = function(text) {
	this.__identifier = "span";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
	this.__styles = [];
};

Jewel.Span.prototype = Jewel.Component.prototype;


