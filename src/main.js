window.addEventListener('load', function() {
	Jewel.load();
});

window.Jewel = function(callback) {
	Jewel._callback = callback;
	Jewel._containers = [];
};

Jewel.load = function() {
	Jewel._callback();
};

Jewel.add = function(container) {
	if (Jewel._containers.indexOf(container) < 0) {
		Jewel._containers.push(container);
	}
};

Jewel.paint = function() {
	var containers = Jewel._containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i]._element)) {
			document.body.removeChild(containers[i]._element);
		}
		containers[i].paint();

		if (!document.body.contains(containers[i]._element)) {
			document.body.appendChild(containers[i]._element);
		}
	}
};

Jewel.update = function() {
	var containers = Jewel._containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].update();
	}
};
