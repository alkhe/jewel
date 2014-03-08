var doc = new Jewel.Viewport();
Jewel(function() {
		// Elements
	var button1 = new Jewel.Button("Add 5 Textboxes");
	var button2 = new Jewel.Button("Hello");
	var textbox1 = new Jewel.TextBox("Default text");
	var textbox2 = new Jewel.TextBox("Default text");
	
	// Text
	textbox2.SetText("Default Text");
	
	// Events
	button1.AddEvent("click", button1_click);
	button2.AddEvent("click", button2_click);
	
	// Adding all
	doc.Add(button1);
	doc.Add(button2);
	doc.Add(new Jewel.Text("Hello world!"));
	doc.Add(textbox1);
	doc.Add(textbox2);
	
	Jewel.Add(doc);
	
	Jewel.Paint();
	
	
	
	// Event Listeners
	function button1_click(e) {
		doc.Add(new Jewel.Text);
		for (var i = 0; i < 5; i++) {
			doc.Add(new Jewel.TextBox);
		}
		Jewel.Update();
	}
	
	function button2_click(e) {
		alert("Hello!");
	}
});
