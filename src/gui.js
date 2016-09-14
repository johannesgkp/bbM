/*
* 
*/
Game.prototype.guiTrain = function() {
	// GUI changes
	
	// show
	document.getElementById("runButton").style.display = "inline";
	document.getElementById("drinkButton").style.display = "inline";
	document.getElementById("throwButton").style.display = "inline";
		
	// hide
	document.getElementById("testFight").style.display = "none";
	
	
	this.clearTable();
	this.firstLine();
	
	for(i = 0; i < fighterArray.length; i++) {
		this.announceArrayOfFighterRadioButton(fighterArray, i);
	}
	
	this.guiCheckBoxAll();
};

/*
* 
*/
Game.prototype.guiFight = function() {
	var tableRowCount = 0;
	var tableRow = document.getElementById("announcements").insertRow((tableRowCount));
	// GUI changes
	
	// show
	document.getElementById("testFight").style.display = "inline";
	document.getElementById("parkFight").style.display = "inline";
	document.getElementById("turnierFight").style.display = "inline";
	
	// hide	
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	
	
	this.clearTable();
	this.firstLine();
	
	for(i = 0; i < fighterArray.length; i++) {
		this.announceArrayOfFighterRadioButton(fighterArray, i);
	}
	
	this.guiCheckBoxAll();
};

/*
* sets the buttons.style.display to "none" or "block" to change the view acordingly
* updates the dropdownlist
* clears the announcments table
*/
Game.prototype.guiBuy = function() {
	var i = 0;
	
	// show
	
	// hide
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	document.getElementById("testFight").style.display = "none";
	
	this.clearTable();
	// sets up the first line of the announcmentTable (Name, Speed...)
	this.firstLine();
	
	for(i = 0; i < buyableFighter.length; i++) {
		this.announceArrayOfFighter(buyableFighter, i);
	}
	this.loadTopHUD();
};

/*
* 
*/
Game.prototype.guiCheckBoxAll = function() {
	var tableRowCount = document.getElementById("announcements").rows.length;
	var tableRow = document.getElementById("announcements").insertRow((tableRowCount));
	
	tableRow.insertCell(0).innerHTML = ("<span><input name='team2' type='checkbox' onclick='if(this.checked) {checkAll()} else {unCheckAll()};' value=" + fighterArray.length + " />All</span>");
};