// demonstrates DOM image swapping

document.getElementById("unique").onclick = change;

function change() {
    
    var url = "images/"
   
    // get the current state of the button group -
    var radioButtons = document.getElementsByName("elements");
    
    // find the checked button -
    for ( var i in radioButtons ) {       
        if ( radioButtons[i].checked ) {
            var checkedButton = radioButtons[i].value;
            break;
        }
    }
	
	// create a string for the image src location 
    // this works b/c I named my button values to match the image filenames
	var newSource = url + checkedButton + ".jpg";
	
	// replace the image using the DOM 
    var image = document.getElementById("photo");
	image.setAttribute( "src", newSource );
    
}

