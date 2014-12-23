Jewel.Container = function() {
	this._identifier = 'div';
	this._controls = [];
	this._element = undefined;
};

Jewel.Container.prototype = new Jewel.Component;

Jewel.Container.prototype.add = function(control) {
	if (this._controls.indexOf(control) < 0) {
		this._controls.push(control);
		return true;
	}
	return false;
}

Jewel.Container.prototype.update = function() {
	if (!this._element) return;
	var element = this._element;
	var controls = this._controls;
	for (var i = 0, l = controls.length; i < l; i++) {
		if (element.contains(controls[i]._element)) {
			controls[i].update();
		}
		else {
			controls[i].paint();
			element.appendChild(controls[i]._element);
		}
	}
	this.behave();
}
