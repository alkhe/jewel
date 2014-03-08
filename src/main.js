window.addEventListener("load", function() {
	Jewel.Load();
});

var Jewel = function(callback) {
	Jewel.__callback = callback;
	Jewel.__containers = [];
};

Jewel.Load = function() {
	Jewel.__callback();
};

Jewel.Add = function(container) {
	if (Jewel.__containers.indexOf(container) < 0) {
		Jewel.__containers.push(container);
	}
};

Jewel.Paint = function() {
	console.log("Paint");
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		if (document.body.contains(containers[i].__element)) {
			document.body.removeChild(containers[i].__element);
		}
		containers[i].Paint();
		
		if (!document.body.contains(containers[i].__element)) {
			document.body.appendChild(containers[i].__element);
		}
	}
};

Jewel.Update = function() {
	var containers = Jewel.__containers;
	for (var i = 0, l = containers.length; i < l; i++) {
		containers[i].Update();
	}
};