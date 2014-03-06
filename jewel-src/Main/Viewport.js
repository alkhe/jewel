Jewel.Viewport = function() {
	this.__controls = [];
	this.__element = undefined;
};

Jewel.Viewport.prototype = {
	Add : function(control) {
		if (this.__controls.indexOf(control)<0) {
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
		for (var i=0,l=controls.length; i<l; i++) {
			if (element.contains(controls[i].__element)) {
				controls[i].Update();
			}
			else {
				controls[i].Paint();
				element.appendChild(controls[i].__element);
			}
		}
	},
};