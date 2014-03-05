var Jewel = {
	JControl: function() {
		this.__identifier = "control";
		this.__text = "";
	}

	JButton:: function() {
		this.__type = "button";
		this.__extra = "type='button'";
		this.__options = "";
		this.__text = "";
		this.setText = function(textString) {
			this.__text = textString;
		};
		this.html = function() {
			return "<" + this.__type + " " + this.__extra + " " + this.__options + ">" + this.__text + "</" + this.__type + ">";
		}
	}

	JTextBox: function() {
		this.__type = "button";
		this.__extra = "type='button'";
		this.__options = "";
		this.__text = "";
		this.setText = function(textString) {
			this.__text = textString;
		};
		this.html = function() {
			return "<" + this.__type + " " + this.__extra + " " + this.__options + ">" + this.__text + "</" + this.__type + ">";
		}
	}

	JViewport: function() {
		this.__controls = new Array();
		this.add = function(control) {
			this.__controls.push(control);
		}
		this.invalidate = function() {
			this.__paint();
		}
		this.__paint = function() {
			var content = "";
			var arrayLength = this.__controls.length;
			for (var i = 0; i < arrayLength; i++) {
				content += this.__controls[i].html();
			}
			paintBody(content);
		}
	}

	paintBody: function(textString) {
		document.body.innerHTML = textString;
	}

	Load: function() {

	}
}

window.onload = function() {
	Jewel.Load();
};
