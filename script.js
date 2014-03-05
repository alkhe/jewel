Jewel.Load = function() {
	var doc = new Jewel.Viewport();
	var btn = new Jewel.Button();
	btn.setText("Button");
	doc.add(btn);
	var btn2 = new Jewel.Button();
	btn2.setText("Button");
	doc.add(btn2);
	doc.invalidate();
}

