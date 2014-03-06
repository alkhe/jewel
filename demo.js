var doc = new Jewel.Viewport;

var bAddTextboxes = new Jewel.Button;
var bHello = new Jewel.Button;
var bChangeText = new Jewel.Button;
var tDefault = new Jewel.Textbox;

Jewel.Load = function() {

	bAddTextboxes.SetText("Add 5 Textboxes");
	bAddTextboxes.AddEvent("onclick", 'addTextBoxes(5)');
	bHello.SetText("Hello");
	bHello.AddEvent("onclick", 'hello()');
	bChangeText.SetText("1");
	bChangeText.AddEvent("onclick", 'incrementText(bChangeText)');
	tDefault.SetText("Default Text");

	doc.Add(bAddTextboxes);
	doc.Add(bHello);
	doc.Add(new Jewel.Line);
	doc.Add(tDefault);
	doc.Add(bChangeText);

	doc.Invalidate();
}

function addTextBoxes(textboxes) {
	doc.Add(new Jewel.Line);
	for (var j = 0; j < textboxes; j++) {
		doc.Add(new Jewel.Textbox);
	}
	doc.Invalidate();
}

function hello() {
	alert('Hello!');
}

function incrementText(control) {
	control.SetText(parseInt(control.GetText()) + 1);
	doc.Invalidate();
}