window.addEventListener('load', function() {
	Jewel.load();
});

window.Jewel = function(callback) {
	Jewel.__callback = callback;
	Jewel.__containers = [];
};

Jewel.load = function() {
	Jewel.__callback();
};

Jewel.add = function(container) {
	if (Jewel.__containers.indexOf(container) < 0) {
		Jewel.__containers.push(container);
	}
};

Jewel.paint = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i].__element)) {
			document.body.removeChild(containers[i].__element);
		}
		containers[i].paint();

		if (!document.body.contains(containers[i].__element)) {
			document.body.appendChild(containers[i].__element);
		}
	}
};

Jewel.update = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].update();
	}
};
