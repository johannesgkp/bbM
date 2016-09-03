/*
* sets the buttons.style.display to "none" or "block" to change the view acordingly
* updates the dropdownlist
* clears the announcments table
*/
function buy() {	
	phase = 2;
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
}

/*
* adds a fighter from buyableFighter to your fighterArray if you cann afford it
*/
function purchase() {	
	var fighterDDL = document.getElementById("fighterDDL");
	var fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;
	var table = document.getElementById("announcements");
	
	// if you can afford the fighter
	if(player.money >= buyableFighter[fighterNumber].value){
		// pay
		player.money -= buyableFighter[fighterNumber].value;
		// add the fighter to your fighterArray
		fighterArray[fighterArray.length] = buyableFighter[fighterNumber];
		// announce buying
		table.insertRow(0).innerHTML = purchasedSen + " " + buyableFighter[fighterNumber].name + ".";
		// remove bought fighter form the buyableFighter
		buyableFighter.splice(fighterNumber, 1);
		// change the content of the DDL
		fighterToDDL(buyableFighter);
	} else {	
		// announce that you dont have enough money
		table.insertRow(0).innerHTML = notEnoughMoneySen + " " + buyableFighter[fighterNumber].name + ".";
	}
}

/*
* creates fighters, that can be bought
* only creates Fighter in the same range at the Time
* later it should be like 3 bad 3 middle and 3 good(expansive) fighters
*/
function getGoods() {   	
	var i = 0;
	var numberOffers = 6;
	
	for(i = 0; i < numberOffers; i++){
		buyableFighter[i] = new Fighter(7, 5, 7, 5, 16, 12, 15, 10, 12, 8, 0.05, 0.1, 3, 5, 20);
	}
}

/*
* 
*/
function phaseId() {   
	if(phase == 0) {
		
	} else if (phase == 1) {
		
	} else if (phase == 2) {
		announceArrayOfFighter(buyableFighter, -1);
	} else if (phase == 3) {
		
	} else {
		
	}
}