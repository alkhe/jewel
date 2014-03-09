// Textbox class to fade in upon instantiation
Jewel.FadeTextBox = function(text) {
	this.__identifier = "input";
	this.__text = text || "";
	this.__element = undefined;
	this.__id = "";
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
}

Jewel.FadeTextBox.prototype = new Jewel.TextBox;

Jewel.FadeTextBox.prototype.Paint = function() {
	this.__element = document.createElement(this.__identifier);
	this.AddClass(["transparent"]);
	this.Update();
	var element = this.__element;
	setTimeout(function() {element.style.opacity = 1}, 0);
}

Jewel(function() {
	var frontend = new Jewel.Container;

	// Frontend Elements
	var bAddTextboxes = new Jewel.Button("Smooth Add Textboxes");
	var bHello = new Jewel.Button("Hello");
	var tTextbox = new Jewel.TextBox("Default text");

	// Initialize Without Text
	var bIncrement = new Jewel.Button;
	var bCustom = new Jewel.Atom;

	// CSS DOM Styles
	tTextbox.SetStyle([
		["padding-top", "20px"],
		["padding-bottom", "20px"]
		]);

	// CSS Class Styles
	bCustom.AddClass(["dark"]);

	// Member Functions
	bIncrement.SetText("1");
	bCustom.SetText("Hard Add textboxes");
	
	// Events
	bAddTextboxes.AddEvent("click", addSmooth);
	bCustom.AddEvent("click", addHard);
	bHello.AddEvent("click", greet);
	bIncrement.AddEvent("click", increment);
	
	// Adding To Container
	frontend.Add(bAddTextboxes);
	frontend.Add(bHello);
	frontend.Add(new Jewel.Atom);
	frontend.Add(bCustom);
	frontend.Add(new Jewel.Atom);
	frontend.Add(new Jewel.Span("Click to increment: "));
	frontend.Add(bIncrement);
	frontend.Add(new Jewel.Atom);
	frontend.Add(tTextbox);

	// Add to Jewel Mainframe
	Jewel.Add(frontend);
	
	// Paint
	Jewel.Paint();
	
	// Event Listeners
	var counter = 5;

	function addSmooth(e) {
		if (counter == 5) {
			counter = 0;
			frontend.Add(new Jewel.Atom);
			setTimeout(addSmoothExtension, 50);
		}
	}

	function addSmoothExtension() {
		counter += 1;
		frontend.Add(new Jewel.FadeTextBox);
		frontend.Update();
		if (counter < 5) {
			setTimeout(addSmoothExtension, 50);
		}
	};
	
	function addHard() {
		frontend.Add(new Jewel.Atom);
		for (var i = 0; i < 5; i++) {
			frontend.Add(new Jewel.TextBox);
		}
		frontend.Update();
	};

	function greet(e) {
		alert("Hello!");
	}

	function increment(e) {
		bIncrement.SetText(parseInt(bIncrement.GetText()) + 1);
		bIncrement.Update();
	}
});
