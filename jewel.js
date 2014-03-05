var Jewel = {
	Control: function() {
		this.__identifier = "";
		this.__text = "";
	},

	DivId: function() {
		this.__identifier = "";
		this.__text = "";
	},

	DivClass: function() {
		this.__identifier = "";
		this.__text = "";
	},

	Line: function() {
		this.HTML = function() {
			return "<br />";
		}
	},

	Button: function() {
		this.__identifier = "button";
		this.__type = "'button'";
		this.__options = "";
		this.__text = "";
		this.__events = new Array();
		this.SetText = function(textString) {
			this.__text = textString;
		};
		this.AddEventHandler = function(event, e) {
		};
		this.HTML = function() {
			return (
				"<" + this.__identifier + " type=" + this.__type + " " + this.__options + ">" +
				this.__text +
				"</" + this.__identifier + ">"
				);
		}
	},

	Textbox: function() {
		this.__identifier = "input";
		this.__type = "'text'";
		this.__options = "";
		this.__text = "";
		this.SetText = function(textString) {
			this.__text = textString;
		};
		this.HTML = function() {
			return ("<" + this.__identifier + " type=" + this.__type + " " + this.__options + " value=" + this.__text + "/>");
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
		console.log("PaintBody");
	},

	Load: function() {

	}
};

window.onload = function() {
	console.log("Jewel.Load");
	Jewel.Load();
};
