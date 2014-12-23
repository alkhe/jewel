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
