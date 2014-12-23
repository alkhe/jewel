Jewel.Container = function() {
	this.$identifier = 'div';
	this.$controls = [];
	this.$element = undefined;
};

Jewel.Container.prototype = new Jewel.Component;

Jewel.Container.prototype.add = function(control) {
	if (this.$controls.indexOf(control) < 0) {
		this.$controls.push(control);
		return true;
	}
	return false;
}

Jewel.Container.prototype.update = function() {
	if (!this.$element) return;
	var element = this.$element;
	var controls = this.$controls;
	for (var i = 0, l = controls.length; i < l; i++) {
		if (element.contains(controls[i].$element)) {
			controls[i].update();
		}
		else {
			controls[i].paint();
			element.appendChild(controls[i].$element);
		}
	}
	this.behave();
}
