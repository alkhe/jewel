#Jewel
<br />
>A lightweight JavaScript library that modulates and replaces conventional HTML UI design.

Similar to libraries like Qt, Swing, and .NET, in which controls can be declared as objects and added to a hierarchial UI layout, and components can be inherited and derived for extended use.

To create a simple webpage, only two file inclusions are required.

    <html>
    <head>
    	<script type="text/javascript" src="jewel.js"></script>
    	<script type="text/javascript" src="myscripts.js"></script>
    </head>
    </html>

Everything can then be managed in your JavaScript file.

    // Initialize a Jewel with a callback function
    Jewel(function() {
    
        // Create a container
        var frontend = new Jewel.Container;
    
        // Declare elements to be added to the container
    	var bHello = new Jewel.Button("Hello");
    	var tTextbox = new Jewel.TextBox("Default text");
    
    	// Initialize Without Text
    	var bGoodbye = new Jewel.Button;
    	var bDiv = new Jewel.Atom;
    
    	// Set CSS Style by DOM
    	tTextbox.SetStyle([
    		["padding-top", "20px"],
    		["padding-bottom", "20px"]
    		]);
    
    	// Set CSS Style by Class
    	bDiv.AddClass(["myclass"]);
    
    	// Set Text
    	bGoodbye.SetText("Goodbye");
    	bDiv.SetText("This is a div");
    	
    	// Add Event callbacks
        bHello.AddEvent("click", greet);
        bGoodbye.AddEvent("click", farewell);
    	bDiv.AddEvent("click", divclicked);
    	
    	// Adding To Container
    	frontend.Add(bHello);
    	frontend.Add(bGoodbye);
        
        // Empty div as new line
    	frontend.Add(new Jewel.Atom);
        
    	frontend.Add(tTextbox);
    	frontend.Add(bDiv);
    
    	// Add container to Mainframe
    	Jewel.Add(frontend);
    	
    	// Paint
    	Jewel.Paint();
    	
    	// Event callback definitions
    	function greet(e) {
    		alert("Hello!");
    	}
        
        function farewell(e) {
        	alert("Goodbye!");
    	}
        
        function divclicked(e) {
        	alert("Div clicked!");
    	}
    });