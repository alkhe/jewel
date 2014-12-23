// Textbox class to fade in upon instantiation
Jewel.FadeTextBox = function(text) {
	this.__identifier = 'input';
	this.__text = text || '';
	this.__element = undefined;
	this.__id = '';
	this.__classes = [];
	this.__events = [];
	this.__styles = [];
}

Jewel.FadeTextBox.prototype = new Jewel.TextBox;

Jewel.FadeTextBox.prototype.Paint = function() {
	this.__element = document.createElement(this.__identifier);
	this.addClass(['transparent']);
	this.update();
	var element = this.__element;
	setTimeout(function() {element.style.opacity = 1}, 0);
}

Jewel(function() {
	var frontend = new Jewel.Container;

	// Frontend Elements
	var bAddTextboxes = new Jewel.Button('Smooth Add Textboxes');
	var bHello = new Jewel.Button('Hello');
	var tTextbox = new Jewel.TextBox('Default text');

	// Initialize Without Text
	var bIncrement = new Jewel.Button;
	var bCustom = new Jewel.Atom;

	// CSS DOM Styles
	tTextbox.style([
		['padding-top', '20px'],
		['padding-bottom', '20px']
		]);

	// CSS Class Styles
	bCustom.addClass(['dark']);

	// Member Functions
	bIncrement.text('1');
	bCustom.text('Hard Add textboxes');

	// Events
	bAddTextboxes.addEvent('click', addSmooth);
	bCustom.addEvent('click', addHard);
	bHello.addEvent('click', greet);
	bIncrement.addEvent('click', increment);

	// Adding To Container
	frontend.add(bAddTextboxes);
	frontend.add(bHello);
	frontend.add(new Jewel.Atom);
	frontend.add(bCustom);
	frontend.add(new Jewel.Atom);
	frontend.add(new Jewel.Span('Click to increment: '));
	frontend.add(bIncrement);
	frontend.add(new Jewel.Atom);
	frontend.add(tTextbox);

	// Add to Jewel Mainframe
	Jewel.add(frontend);

	// Paint
	Jewel.paint();

	// Event Listeners
	var counter = 5;

	function addSmooth(e) {
		if (counter == 5) {
			counter = 0;
			frontend.add(new Jewel.Atom);
			setTimeout(addSmoothExtension, 50);
		}
	}

	function addSmoothExtension() {
		counter += 1;
		frontend.add(new Jewel.FadeTextBox);
		frontend.update();
		if (counter < 5) {
			setTimeout(addSmoothExtension, 50);
		}
	};

	function addHard() {
		frontend.add(new Jewel.Atom);
		for (var i = 0; i < 5; i++) {
			frontend.add(new Jewel.TextBox);
		}
		frontend.update();
	};

	function greet(e) {
		alert('Hello!');
	}

	function increment(e) {
		bIncrement.text(parseInt(bIncrement.text()) + 1);
		bIncrement.update();
	}
});
