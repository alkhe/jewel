function JControl() {
	this.__identifier = "control";
	this.__text = "";
}

function JButton() {
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

function JViewport() {
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

function paintBody(textString) {
	document.body.innerHTML = textString;
}

window.onload = function() {
	load();
};

function load() {

}