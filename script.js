Jewel.Load = function() {
	var doc = new Jewel.Viewport();
	var btn = new Jewel.Button();
	var btn2 = new Jewel.Button();
	var txt = new Jewel.Textbox();
	btn.SetText("Button");
	btn2.SetText("Button");
	txt.SetText("Default Text");
	doc.Add(btn);
	doc.Add(btn2);
	doc.Add(new Jewel.Line());
	doc.Add(txt);
	doc.Invalidate();
}
