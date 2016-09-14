/*
* 
*/
function guiTrain(fighterArray) {	
var i = 0;
	// GUI changes
	
	// show
	var guiTrainArray = document.getElementsByName("guiTrain");
	for (i = 0; i < guiTrainArray.length; i++) {
		guiTrainArray[i].style.display = "inline";
	}
		
	// hide	
	var guiFightArray = document.getElementsByName("guiFight");
	for (i = 0; i < guiFightArray.length; i++) {
		guiFightArray[i].style.display = "none";
	}
	
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
function guiFight(fighterArray) {
	var tableRowCount = 0;
	var tableRow = document.getElementById("announcements").insertRow((tableRowCount));
	// GUI changes
	
	// show
	var guiFightArray = document.getElementsByName("guiFight");
	for (i = 0; i < guiFightArray.length; i++) {
		guiFightArray[i].style.display = "inline";
	}
		
	// hide	
	var guiTrainArray = document.getElementsByName("guiTrain");
	for (i = 0; i < guiTrainArray.length; i++) {
		guiTrainArray[i].style.display = "none";
	}
	
	
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
function guiBuy(player, buyableFighter) {	
	var i = 0;
	
	// show
		
	// hide	
	var guiTrainArray = document.getElementsByName("guiTrain");
	for (i = 0; i < guiTrainArray.length; i++) {
		guiTrainArray[i].style.display = "none";
	}
	var guiFightArray = document.getElementsByName("guiFight");
	for (i = 0; i < guiFightArray.length; i++) {
		guiFightArray[i].style.display = "none";
	}
	
	clearTable();
	// sets up the first line of the announcmentTable (Name, Speed...)
	firstLine();
	
	for(i = 0; i < buyableFighter.length; i++) {
		announceArrayOfFighter(buyableFighter, i);
	}
	loadTopHUD(player);
}

/*
* 
*/
function guiCheckBoxAll() {
	var tableRowCount = document.getElementById("announcements").rows.length;
	var tableRow = document.getElementById("announcements").insertRow((tableRowCount));
	
	tableRow.insertCell(0).innerHTML = ("<span><input name='team2' type='checkbox' onclick='if(this.checked) {checkAll()} else {unCheckAll()};' value=" + fighterArray.length + " />All</span>");
}