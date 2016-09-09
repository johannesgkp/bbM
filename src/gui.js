/*
* 
*/
function guiTrain() {	
	// GUI changes
	
	// show
	document.getElementById("runButton").style.display = "inline";
	document.getElementById("drinkButton").style.display = "inline";
	document.getElementById("throwButton").style.display = "inline";
		
	// hide
	document.getElementById("teamSelectButton").style.display = "none";
	
	
	clearTable();
	firstLine();
	
	for(i = 0; i < fighterArray.length; i++) {
		announceArrayOfFighterRadioButton(fighterArray, i);
	}
	
	guiCheckBoxAll();
}

/*
* 
*/
function guiFight() {
	var tableRowCount = 0;
	var tableRow = document.getElementById("announcements").insertRow((tableRowCount));
	// GUI changes
	
	// show
	document.getElementById("teamSelectButton").style.display = "inline";
	
	// hide	
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	
	
	clearTable();
	firstLine();
	
	for(i = 0; i < fighterArray.length; i++) {
		announceArrayOfFighterRadioButton(fighterArray, i);
	}
	
	guiCheckBoxAll();
}

/*
* sets the buttons.style.display to "none" or "block" to change the view acordingly
* updates the dropdownlist
* clears the announcments table
*/
function guiBuy() {	
	var i = 0;
	
	// show
	
	// hide
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	document.getElementById("teamSelectButton").style.display = "none";
	
	clearTable();
	// sets up the first line of the announcmentTable (Name, Speed...)
	firstLine();
	
	for(i = 0; i < buyableFighter.length; i++) {
		announceArrayOfFighter(buyableFighter, i);
	}
}

/*
* 
*/
function guiCheckBoxAll() {
	var tableRowCount = document.getElementById("announcements").rows.length;
	var tableRow = document.getElementById("announcements").insertRow((tableRowCount));
	
	tableRow.insertCell(0).innerHTML = ("<span><input name='team2' type='checkbox' onclick='if(this.checked) {checkAll()} else {unCheckAll()};' value=" + fighterArray.length + " />All</span>");
}