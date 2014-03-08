// ./main.js
window.addEventListener("load", function() {
	Jewel.Load();
});

var Jewel = function(callback) {
	Jewel.__callback = callback;
	Jewel.__viewports = [];
};

Jewel.Load = function() {
	Jewel.__callback();
};

Jewel.Add = function(viewport) {
	if (Jewel.__viewports.indexOf(viewport) < 0) {
		Jewel.__viewports.push(viewport);
	}
};

Jewel.Paint = function() {
	console.log("Paint");
	var viewports = Jewel.__viewports;
	for (var i = 0, l = viewports.length; i < l; i++) {
		if (document.body.contains(viewports[i].__element)) {
			document.body.removeChild(viewports[i].__element);
		}
		viewports[i].Paint();
		
		if (!document.body.contains(viewports[i].__element)) {
			document.body.appendChild(viewports[i].__element);
		}
	}
};

Jewel.Update = function() {
	var viewports = Jewel.__viewports;
	for (var i = 0, l = viewports.length; i < l; i++) {
		viewports[i].Update();
	}
};

// ./Input/button.js
Jewel.Button = function(text) {
	this.__identifier = "button";
	this.__text = text || "";
	this.__element = undefined;
	this.__events = [];
};

Jewel.Button.prototype = {
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
		this.__element = document.createElement("button");
		this.Update();
	},
	
	Update : function() {
		if (!this.__element) return;
		var element = this.__element;
		element.innerHTML = this.__text;
		
		// Events
		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
	}
};

// ./Input/textbox.js
Jewel.TextBox = function(default_text) {
	this.__identifier = "textbox";
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
		this.__element = document.createElement("input");
		this.Update();
	},
	
	Update : function() {
		if (!this.__element)
			return;
		var element = this.__element;
		element.type = "text";
		element.value = this.__text;
		
		var events = this.__events;
		for (var i = 0, l = events.length; i < l; i++) {
			element.removeEventListener(events[i].event, events[i].callback);
			element.addEventListener(events[i].event, events[i].callback);
		}
		
		element.addEventListener("change", this.GetText);
	}
};

// ./Main/viewport.js
Jewel.Viewport = function() {
	this.__controls = [];
	this.__element = undefined;
};

Jewel.Viewport.prototype = {
	Add : function(control) {
		if (this.__controls.indexOf(control) < 0) {
			this.__controls.push(control);
			return true;
		}
		return false;
	},
	
	Paint : function() {
		this.__element = document.createElement("div");
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

// ./Output/text.js
Jewel.Text = function(text) {
	this.__identifier = "text";
	this.__text = text || "";
	this.__element = undefined;
};

Jewel.Text.prototype = {
	SetText : function(text) {
		this.__text = text;
		this.__update = true;
	},
	
	GetText : function() {
		return this.__text;
	},
	
	Paint : function() {
		this.__element = document.createElement("div");
		this.Update();
	},
	
	Update : function() {
		if (!this.__element) return;
		var element = this.__element;
		element.innerHTML = this.__text;
	}
};

