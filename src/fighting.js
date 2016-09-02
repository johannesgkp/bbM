/*
* 
*/
function prepareFight() {	
	phase = 0;
	
	document.getElementById("fighterDDL").style.display = "none";
	document.getElementById("purchaseButton").style.display = "none";	
	document.getElementById("runButton").style.display = "none";
	document.getElementById("drinkButton").style.display = "none";
	document.getElementById("throwButton").style.display = "none";
	
	clearTable();
	
	var gamePossible = true;
	var costFight = 0;
	var i = 0;
	var fightingFighter = new Array;
	numberOfFightingFighter = 0;
	
	for(i = 0; i < fighterArray.length; i++) {
		fighterArray[i].beer = getBeer(player.beerId);
		fightingFighter[i] = fighterArray[i];
		announceFighting(4, fightingFighter[i].name, "");
	}
	
	gamePossible = checkTimeArray(fightingFighter);
	costFight = checkMoney(fightingFighter);
	announceFighting(5, "", "2");
	
	for(i = 0; i < fighterArray.length; i++) {
		fightingFighter[(fighterArray.length + i)] = new Fighter(15, 5, 12, 3, 16, 4, 15, 5, 20, 10, 0.05, 0.1, 3, 5, 20);
		announceFighting(4, fightingFighter[(fighterArray.length + i)].name, "");
	}
	
	announceFighting(5, "", "1");
	numberOfFightingFighter = (fightingFighter.length + 2);
	
	if((gamePossible) && (costFight > 0)){
		fight(fightingFighter, costFight);
		loadTopHUD();
		save();
	}
}

/*
* 
*/
function fight(fightingFighter, costFight) {	
	loadTopHUD();

	var gameOver = false;
	var activeFighter = 0;
	var i = 0;
	var numberOfRounds = 0;
	
	var accuracyNeededToHitBottle = 0.09;
	var accuracyNeededToBounceBack = 0.3;
	var strengthNeededToHitBottle = 2;
	var fieldLength = 100;
	
	var throwOutcome;
	var catchTime;
	
	while((!gameOver) && (numberOfRounds < 500)) {
		numberOfRounds++;
		throwOutcome = fightingFighter[activeFighter].throwing(fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack);
		catchTime = fightingFighter[((activeFighter + (fightingFighter.length / 2)) % fightingFighter.length)].catching(throwOutcome);
		gameOver = true;
		
		//everybody from one team drinks
		for(i = 0; i < (fightingFighter.length / 2); i++) {
			fightingFighter[(i + activeFighter)].drinking(catchTime);
			if(fightingFighter[(i + activeFighter)].beer.liter != 0){
				gameOver = false;
			}
		}
		if(!gameOver) {
			activeFighter = ((activeFighter + (fightingFighter.length / 2)) % fightingFighter.length);	
		}
	}
	
	//activeFighter = ((activeFighter + (fightingFighter.length / 2)) % fightingFighter.length)
	for(i = 0; i < (fightingFighter.length / 2); i++) {
		// winner
		if(fightingFighter[(activeFighter + i)].beer.liter <= 0){
			announceFighting(3, fightingFighter[(activeFighter + i)].name, "");
		}
	}
	// if you lost
	if(activeFighter >= ((fightingFighter.length / 2) - 1)) {
		player.money -= costFight;
	} else {
		console.log("DU HASST GEWONNEN!");
		costFight = 0;
		var i = 0;
		for(i = 0; i < (fightingFighter.length / 2); i++) {
			costFight += (fightingFighter[((fightingFighter.length / 2) + i)].value / 25);
		}
		costFight /= fightingFighter.length;
		player.money += costFight;
	}
	activeFighter = ((activeFighter + (fightingFighter.length / 2)) % fightingFighter.length)	
	for(i = 0; i < (fightingFighter.length / 2); i++) {
		// looser chucks beer
		if(fightingFighter[(activeFighter + i)].beer.liter > 0){
			announceFighting(8, fightingFighter[(activeFighter + i)].name, "");
		}
		// fighter are busy for the next 5 minuts
		fightingFighter[i].occupied = addMinutes(5);
	}
	console.log("numberOfRounds: " + numberOfRounds);
}

/*
* 
*/
function checkMoney(fightingFighter) {
	var numberOfFightingFighters = fightingFighter.length;
	var costBeer = getBeer(player.beerId).cost * numberOfFightingFighters;
	var costFight = 0;
	var i = 0;
	for(i = 0; i < numberOfFightingFighters; i++) {
		costFight += (fightingFighter[i].value / 25);
	}
	costFight /= fightingFighter.length;
	if((costBeer + costFight) <= player.money){
		player.money -= costBeer;
		return costFight;
	} else {
		announceFighting(7, "", "");
		return 0;
	}
}

/*
* 
*/
function checkTimeArray(fightingFighter) {
	var i = 0;
	for(i = 0; i < fightingFighter.length; i++) {
		if(fightingFighter[i].occupied < new Date().getTime()) {
			return true;
		} else {
			announceFighting(6, fightingFighter[i].name, fightingFighter[i].occupied);	
			return false;
		}
	}		
}