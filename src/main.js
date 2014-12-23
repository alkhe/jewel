window.addEventListener('load', function() {
	Jewel.load();
});

window.Jewel = function(callback) {
	Jewel.$callback = callback;
	Jewel.$containers = [];
};

Jewel.load = function() {
	Jewel.$callback();
};

Jewel.add = function(container) {
	if (Jewel.$containers.indexOf(container) < 0) {
		Jewel.$containers.push(container);
	}
};

Jewel.paint = function() {
	var containers = Jewel.$containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i].$element)) {
			document.body.removeChild(containers[i].$element);
		}
		containers[i].paint();

		if (!document.body.contains(containers[i].$element)) {
			document.body.appendChild(containers[i].$element);
		}
	}
};

Jewel.update = function() {
	var containers = Jewel.$containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].update();
	}
};
