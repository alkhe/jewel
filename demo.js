var frontend = new Jewel.Container;

Jewel(function() {
	// Frontend Elements
	var bAddTextboxes = new Jewel.Button("Add 5 Textboxes");
	var bHello = new Jewel.Button("Hello");
	var tTextbox = new Jewel.TextBox("Default text");

	// Initialize Without Text
	var bIncrement = new Jewel.Button;
	var bCustom = new Jewel.Atom;

	// Member Functions
	bIncrement.SetText("1");
	bCustom.SetText("I also add textboxes");
	
	// Events
	bAddTextboxes.AddEvent("click", addTextboxes);
	bCustom.AddEvent("click", addTextboxes);
	bHello.AddEvent("click", greet);
	bIncrement.AddEvent("click", increment);
	
	// Adding To Container
	frontend.Add(bAddTextboxes);
	frontend.Add(bCustom);
	frontend.Add(bHello);
	frontend.Add(new Jewel.Atom);
	frontend.Add(new Jewel.InlineAtom("Click to increment ->"));
	frontend.Add(bIncrement);
	frontend.Add(new Jewel.Atom);
	frontend.Add(tTextbox);
	
	Jewel.Add(frontend);
	
	Jewel.Paint();
	
	// Event Listeners
	function addTextboxes(e) {
		frontend.Add(new Jewel.Atom);
		for (var i = 0; i < 5; i++) {
			frontend.Add(new Jewel.TextBox);
		}
		frontend.Update();
	}
	
	function greet(e) {
		alert("Hello!");
	}

	function increment(e) {
		bIncrement.SetText(parseInt(bIncrement.GetText()) + 1);
		bIncrement.Update();
	}
});
