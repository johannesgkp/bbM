/*
* 
*/
function guiFight() {	
	// GUI changes
	// hide
	document.getElementById("fighterDDL").style.display = "none";
	document.getElementById("purchaseButton").style.display = "none";	
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	
	clearTable();
}

/*
* sets the buttons.style.display to "none" or "block" to change the view acordingly
* updates the dropdownlist
* clears the announcments table
*/
function guiBuy() {	
	var i = 0;
	
	// show
	document.getElementById("fighterDDL").style.display = "block";
	document.getElementById("purchaseButton").style.display = "inline";
	
	// hide
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	
	fighterToDDL(buyableFighter);
	clearTable();
	// sets up the first line of the announcmentTable (Name, Speed...)
	firstLine();
	
	for(i = 0; i < buyableFighter.length; i++) {
		announceArrayOfFighter(buyableFighter, i);
	}
}