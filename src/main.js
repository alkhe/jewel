window.AddEvent("load", function() {
	Jewel.Load();
});

var Jewel = function(callback) {
	Jewel.__callback = callback;
	Jewel.__viewports = [];
};

Jewel.Load = function() {
	Jewel.__callback();
};

Jewel.Add = function(viewport) {
	if (Jewel.__viewports.indexOf(viewport) < 0) {
		Jewel.__viewports.push(viewport);
	}
};

Jewel.Paint = function() {
	console.log("Paint");
	var viewports = Jewel.__viewports;
	for (var i = 0, l = viewports.length; i < l; i++) {
		if (document.body.contains(viewports[i].__element)) {
			document.body.removeChild(viewports[i].__element);
		}
		viewports[i].Paint();
		
		if (!document.body.contains(viewports[i].__element)) {
			document.body.appendChild(viewports[i].__element);
		}
	}
};

Jewel.Update = function() {
	var viewports = Jewel.__viewports;
	for (var i = 0, l = viewports.length; i < l; i++) {
		viewports[i].Update();
	}
};