var doc = new Jewel.Viewport();

Jewel.Load = function() {
	var btn1 = new Jewel.Button();
	var btn2 = new Jewel.Button();
	var txt = new Jewel.Textbox();
	btn1.SetText("Add 5 Textboxes");
	btn1.AddEvent("onclick", 'btn1_click()');
	btn2.SetText("Hello");
	btn2.AddEvent("onclick", 'btn2_click()');
	txt.SetText("Default Text");
	doc.Add(btn1);
	doc.Add(btn2);
	doc.Add(new Jewel.Line());
	doc.Add(txt);
	doc.Invalidate();
}

function btn1_click() {
	doc.Add(new Jewel.Line());
	for (var j = 0; j < 5; j++) {
		doc.Add(new Jewel.Textbox());
	}
	doc.Invalidate();
}

function btn2_click() {
	alert('Hello!');
}