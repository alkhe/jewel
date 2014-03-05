var Jewel = {
	Control: function() {
		this.__identifier = "control";
		this.__text = "";
	},

	Button: function() {
		this.__type = "button";
		this.__extra = "type='button'";
		this.__options = "";
		this.__text = "";
		this.SetText = function(textString) {
			this.__text = textString;
		};
		this.HTML = function() {
			return "<" + this.__type + " " + this.__extra + " " + this.__options + ">" + this.__text + "</" + this.__type + ">";
		}
	},

	TextBox: function() {
		this.__type = "button";
		this.__extra = "type='button'";
		this.__options = "";
		this.__text = "";
		this.SetText = function(textString) {
			this.__text = textString;
		};
		this.HTML = function() {
			return "<" + this.__type + " " + this.__extra + " " + this.__options + ">" + this.__text + "</" + this.__type + ">";
		}
	},

	Viewport: function() {
		this.__controls = new Array();
		this.Add = function(control) {
			this.__controls.push(control);
		}
		this.Invalidate = function() {
			this.__paint();
		}
		this.__paint = function() {
			var content = "";
			var arrayLength = this.__controls.length;
			for (var i = 0; i < arrayLength; i++) {
				content += this.__controls[i].HTML();
			}
			Jewel.PaintBody(content);
		}
	},

	PaintBody: function(textString) {
		document.body.innerHTML = textString;
	},

	Load: function() {

	}
};

window.onload = function() {
	Jewel.Load();
};
