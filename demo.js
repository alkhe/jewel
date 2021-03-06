// Textbox class to fade in upon instantiation
Jewel.FadeTextBox = function(text) {
	this.$identifier = 'input';
	this.$text = text || '';
	this.$element = undefined;
	this.$id = '';
	this.$classes = [];
	this.$events = [];
	this.$styles = [];
}

Jewel.FadeTextBox.prototype = new Jewel.TextBox;

Jewel.FadeTextBox.prototype.paint = function() {
	this.$element = document.createElement(this.$identifier);
	this.addClass(['transparent']);
	this.update();
	var element = this.$element;
	setTimeout(function() {
		element.style.opacity = 1;
	}, 0);
};

Jewel(function() {
	var frontend = new Jewel.Container,

	// Frontend Elements
		addboxes = new Jewel.Button('Smooth Add Textboxes'),
		hello = new Jewel.Button('Hello'),
		mybox = new Jewel.TextBox('Default text'),

	// Initialize Without Text
		counter = new Jewel.Button,
		custom = new Jewel.Atom;

	// Event Listeners
	var it = 0;

	var addSmooth = function() {
		if (it < 5) {
			it++;
			frontend.add(new Jewel.FadeTextBox);
			setTimeout(addSmooth, 100);
			frontend.update();
		}
		else {
			it = 0;
			frontend.add(new Jewel.Atom);
		}
	},
	addHard = function() {
		for (var i = 0; i < 5; i++) {
			frontend.add(new Jewel.TextBox);
		}
		frontend.add(new Jewel.Atom);
		frontend.update();
	};

	// CSS DOM Styles
	mybox.style({
		'padding-top': '40px',
		'padding-bottom': '20px'
	});

	// CSS Class Styles
	custom.addClass(['dark']);

	// Member Functions
	counter.text('1');
	custom.text('Hard Add textboxes');

	// Events
	addboxes.on('click', addSmooth);
	custom.on('click', addHard);
	hello.on('click', function() {
		alert('Hello!');
	});
	counter.on('click', function() {
		counter.text(~~counter.text() + 1);
		counter.update();
	});

	// Adding To Container
	frontend.add(addboxes);
	frontend.add(hello);
	frontend.add(new Jewel.Atom);
	frontend.add(custom);
	frontend.add(new Jewel.Atom);
	frontend.add(new Jewel.Span('Click to increment: '));
	frontend.add(counter);
	frontend.add(new Jewel.Atom);
	frontend.add(mybox);
	frontend.add(new Jewel.Atom);

	// Add to Jewel Mainframe
	Jewel.add(frontend);

	// Paint
	Jewel.paint();

});
