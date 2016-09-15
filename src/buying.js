/*
* adds a fighter from buyableFighter to your fighterArray if you cann afford it
*/
function purchase(fighterNumber, player, buyableFighter, fighterArray) {	
	//var fighterDDL = document.getElementById("fighterDDL");
	//var fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;
	var table = document.getElementById("announcements");
	// if you can afford the fighter
	if(player.changingMoney(buyableFighter[fighterNumber].value)){
		// add the fighter to your fighterArray
		fighterArray[fighterArray.length] = buyableFighter[fighterNumber];
		// announce buying
		table.insertRow(0).innerHTML = purchasedSen + " " + buyableFighter[fighterNumber].name + ".";
		// remove bought fighter form the buyableFighter
		buyableFighter.splice(fighterNumber, 1);
	} else {	
		// announce that you dont have enough money
		table.insertRow(0).innerHTML = notEnoughMoneySen + " " + buyableFighter[fighterNumber].name + ".";
	}
	guiBuy(player, buyableFighter);
}

/*
* creates fighters, that can be bought
* only creates Fighter in the same range at the Time
* later it should be like 3 bad 3 middle and 3 good(expansive) fighters
*/
function getGoods(numberOffers, playerId) {   	
	var i = 0;
	if((numberOffers > 0) && (playerId >= 0)) {
		var buyableFighter = new Array(numberOffers);
		
		for(i = 0; i < numberOffers; i++){
			buyableFighter[i] = getFighter(playerId);
		}
		return buyableFighter;
	}
	return "numberOffers= " + numberOffers + " " + "playerId= " + playerId;
}