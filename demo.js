var doc = new Jewel.Viewport();
Jewel(function() {
	// Elements
	var bAddTextboxes = new Jewel.Button("Add 5 Textboxes");
	var bHello = new Jewel.Button("Hello");
	var bTextbox = new Jewel.TextBox("Default text");
	
	// Events
	bAddTextboxes.AddEvent("click", addTextboxes);
	bHello.AddEvent("click", greet);
	
	// Adding all
	doc.Add(bAddTextboxes);
	doc.Add(bHello);
	doc.Add(new Jewel.Atom("Hello world!"));
	doc.Add(bTextbox);
	
	Jewel.Add(doc);
	
	Jewel.Paint();
	
	// Event Listeners
	function addTextboxes(e) {
		doc.Add(new Jewel.Atom);
		for (var i = 0; i < 5; i++) {
			doc.Add(new Jewel.TextBox);
		}
		Jewel.Update();
	}
	
	function greet(e) {
		alert("Hello!");
	}
});
