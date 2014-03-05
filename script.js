Jewel.Load = function() {
	var doc = new Jewel.Viewport();
	var btn = new Jewel.Button();
	btn.SetText("Button");
	doc.Add(btn);
	var btn2 = new Jewel.Button();
	btn2.SetText("Button");
	doc.Add(btn2);
	doc.Invalidate();
}
