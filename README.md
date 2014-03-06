Jewel
=====

A lightweight JavaScript library that modulates and replaces conventional HTML UI design.

This is similar to libraries like Qt, Swing, and .NET, where controls can be declared as objects and added to a hierarchial UI layout.

To create a simple webpage, the following is all that needs to be in the HTML file.

<html>
<head>
	<script type="text/javascript" src="jewel.js"></script>
	<script type="text/javascript" src="myscripts.js"></script>
</head>
</html>

Everything can then be managed in the JavaScript file.

First, a Viewport can be created. Currently, the Viewport only serves as a handler to the body.

var doc = new Jewel.Viewport();

//All of the "onload" procedures can be placed in the Jewel.Load callback.

Jewel.Load = function() {
	var btn1 = new Jewel.Button();
	var btn2 = new Jewel.Button();
	var txt = new Jewel.Textbox();
	
	btn1.SetText("Add 5 Textboxes");
	btn1.AddEvent("onclick", 'btn1_click()');
	btn2.SetText("Hello");
	btn2.AddEvent("onclick", 'btn2_click()');
	txt.SetText("Default Text");
	
	//Add these objects to the document
	doc.Add(btn1);
	doc.Add(btn2);
	doc.Add(new Jewel.Line());
	doc.Add(txt);
	
	doc.Invalidate(); //To repaint, just like in any other library
}

//Callback Functions
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
