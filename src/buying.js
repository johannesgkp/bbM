/*
* 
*/
function buy() {	
	phase = 2;
	document.getElementById("fighterDDL").style.display = "block";
	document.getElementById("purchaseButton").style.display = "inline";
	
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	
	
	
	fighterToDDL(newFighterArray);
	clearTable();
	firstLine();
}

/*
* 
*/
function purchase() {	
	var fighterDDL = document.getElementById("fighterDDL");
	var fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;
	var table = document.getElementById("announcements");
	
	if(player.money >= newFighterArray[fighterNumber].value){
		player.money -= newFighterArray[fighterNumber].value;
		fighterArray[fighterArray.length] = newFighterArray[fighterNumber];
		table.insertRow(0).innerHTML = purchasedSen + " " + newFighterArray[fighterNumber].name + ".";
		newFighterArray.splice(fighterNumber, 1);
		fighterToDDL(newFighterArray);
	} else {
		console.log(player.money + " < " + newFighterArray[fighterNumber].value);	
		table.insertRow(0).innerHTML = notEnoughMoneySen + " " + newFighterArray[fighterNumber].name + ".";
	}
}

/*
* 
*/
function getGoods() {   	
	var i = 0;
	var numberOffers = 6;
	
	for(i = 0; i < numberOffers; i++){
		newFighterArray[i] = new Fighter(7, 5, 7, 5, 16, 12, 15, 10, 12, 8, 0.05, 0.1, 3, 5, 20);
	}
}

/*
* 
*/
function phaseId() {   
	if(phase == 0) {
		
	} else if (phase == 1) {
		
	} else if (phase == 2) {
		announceArrayOfFighter(newFighterArray, -1);
	} else if (phase == 3) {
		
	} else {
		
	}
}