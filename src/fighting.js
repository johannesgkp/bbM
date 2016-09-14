/*
* 
*/
function getCheckedCheckboxesFor(checkboxName, callback, beerId, fighterArray) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = new Array;
	
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
	if(values.length == 0){
		return 0;
	} else {		}
		if(typeof(callback) == "function") {
			callback(fighterArray, values, beerId);
		} else {
			return values;			
	}	
}

/*
* 
*/
function prepareParkFight(fighterArray, teamArray, player) {	
	phase = 0;
	
	// how much the player has to pay if he losses (but not the beercost)
	var costBeerFightGain = [0, 0, 0, false, false];
	var i = 0;
	// the first half of the array are the fighter from the player, the second half are the other team
	var fightingFighter = new Array;
	// nessecarie for the GUI because the teams are announced at the top of the table, so the fighting announcments have to start a few lines later
	numberOfFightingFighter = 0;
	clearTable();
	
	// fill the first half of the fightingFighter with the players team
	for(i = 0; i < teamArray.length; i++) {
		// the fighter need to get a new beer
		fighterArray[teamArray[i]].beer = getBeer(player.beerId);
		fightingFighter[i] = fighterArray[teamArray[i]];
		// announce Teammembernames
		announceFighting(4, fightingFighter[i].name, "");
	}
	
	announceFighting(5, "", "2");
	
	// fill the second half of the fightingFighter with random fighters
	for(i = 0; i < teamArray.length; i++) {
		fightingFighter[(teamArray.length + i)] = getFighter();
		// announce Teammembernames
	announceFighting(4, fightingFighter[(teamArray.length + i)].name, "");
	}
	
	costBeerFightGain = checkMoneyAndTime(fightingFighter, 0);
	
	// announce Team
	announceFighting(5, "", "1");
	numberOfFightingFighter = (fightingFighter.length + 2);
	
	// cost Fight is 0 if the fighters are already occupied or the player has not enough money
	if(costBeerFightGain[3] && costBeerFightGain[4]) {
		fight(fightingFighter, costBeerFightGain, 0.26, 0.8, 15, 330, player);
		// changes the ammount of money the player has
		loadTopHUD(player);
		save(fighterArray, player);
	}
}

/*
* 
*/
function prepareTestFight(fighterArray, teamArray, player) {	
	phase = 0;
	
	// how much the player has to pay if he losses (but not the beercost)
	var costBeerFightGain = [0, 0, 0, true, true];
	var i = 0;
	// the first half of the array are the fighter from the player, the second half are the other team
	var fightingFighter = new Array;
	// nessecarie for the GUI because the teams are announced at the top of the table, so the fighting announcments have to start a few lines later
	numberOfFightingFighter = 0;
	clearTable();
		
	// fill the first half of the fightingFighter with the players team
	for(i = 0; i < teamArray.length; i++) {
		// the fighter need to get a new beer
		fighterArray[teamArray[i]].beer = getBeer(player.beerId);
		fightingFighter[i] = fighterArray[teamArray[i]];
		// announce Teammembernames
		announceFighting(4, fightingFighter[i].name, "");
	}
	
	announceFighting(5, "", "2");
	
	// fill the second half of the fightingFighter with random fighters
	for(i = 0; i < teamArray.length; i++) {
		fightingFighter[(teamArray.length + i)] = new Fighter(90, 20, 15, 10, 23, 5, 60, 15, 33, 15, 8, 6, 3, 4, 20);
		// announce Teammembernames
	announceFighting(4, fightingFighter[(teamArray.length + i)].name, "");
	}
	
	//costBeerFightGain = checkMoneyAndTime(fightingFighter, 0);
	
	// announce Team
	announceFighting(5, "", "1");
	numberOfFightingFighter = (fightingFighter.length + 2);
	
	// cost Fight is 0 if the fighters are already occupied or the player has not enough money
	if(costBeerFightGain[3] && costBeerFightGain[4]) {		
		fight(fightingFighter, costBeerFightGain, 0.26, 0.8, 15, 330, player);
		// changes the ammount of money the player has
		loadTopHUD(player);
		//save(fighterArray, player);
	}
}

/*
* 
*/
function fight(fightingFighter, costBeerFightGain, accuracyNeededToHitBottle, accuracyNeededToBounceBack, strengthNeededToHitBottle, fieldLength, player) {	
	// the cost of the beer has been taken from the player
	loadTopHUD(player);

	var gameOver = false;
	// right now the active fighter is the first member of a team but never the second or third... 
	var fFLengthHalf = (fightingFighter.length / 2);
	var activeFighter = 0;
	var i = 0;
	var numberOfRounds = 0;
	
	//accuracyNeededToHitBottle = 0.09;
	//accuracyNeededToBounceBack = 0.3;
	// in m/h
	//strengthNeededToHitBottle = 2;
	// in cm
	//fieldLength = 100;
	
	// in m
	var throwOutcome;
	// in s
	var catchTime;
	
	player.money -= costBeerFightGain[0];
	
	while((!gameOver) && (numberOfRounds < 200)) {
		numberOfRounds++;
		// activeFighter throws
		throwOutcome = fightingFighter[activeFighter].throwing(fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack);
		// first member of oppsite team catches
		catchTime = fightingFighter[((activeFighter + fFLengthHalf) % fightingFighter.length)].catching(throwOutcome);
		
		gameOver = true;
		//everybody from one team drinks
		for(i = 0; i < fFLengthHalf; i++) {
			if(activeFighter < fFLengthHalf) {
				fightingFighter[i].drinking(catchTime);
				if(fightingFighter[i].beer.liter != 0){
					// if one member of the team still has beer left the game isnt over
					gameOver = false;
				}
			} else {
				fightingFighter[(i + fFLengthHalf)].drinking(catchTime);
				if(fightingFighter[i].beer.liter != 0){
					// if one member of the team still has beer left the game isnt over
					gameOver = false;
				}
			}
		}
		if(!gameOver) {
			if((numberOfRounds % 4) == 0) {
				smalLineTable()
				activeFighter--;
			} else if((numberOfRounds % 2) == 0) {
				activeFighter++;
			}
			activeFighter = ((activeFighter + fFLengthHalf) % fightingFighter.length);	
		}
	}
	
	if(activeFighter < fFLengthHalf) {
		activeFighter = 0;
	} else {
		activeFighter = fFLengthHalf;
	}
	
	for(i = 0; i < fFLengthHalf; i++) {
		// winner
		announceFighting(3, fightingFighter[(activeFighter + i)].name, "");			
	}
	
	if(activeFighter < fFLengthHalf) {
		// win
		player.money += costBeerFightGain[2];
	} else {
		// lost
		player.money -= costBeerFightGain[1];
	}
	
	activeFighter = ((activeFighter + fFLengthHalf) % fightingFighter.length);	
	
	for(i = 0; i < fFLengthHalf; i++) {
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
* cost and gain are computet the same way
* average values of the fighter of one team / 20
* @param fightingFighter array
* @return array [cost of beer, cost you have to pay if you loose, money(gain) you win]
*/
function checkMoneyAndTime(fightingFighter) {
	var i = 0;
	//[costBeer, costFight, gainFight, enoughMoney?, time?]
	var result = [0, 0, 0, false, false];
	// if all fighter arent occupied
	var occupiedArray = checkTimeArray(fightingFighter);
	if(occupiedArray[0]) {
		var numberHalfFighters = (fightingFighter.length / 2);
		var costBeer = getBeer(player.beerId).cost * (numberHalfFighters * 2);
		var costFight = 0;
		var gainFight = 0;
		
		for(i = 0; i < numberHalfFighters; i++) {
			costFight += (fightingFighter[i].value / 20);
			gainFight += (fightingFighter[(numberHalfFighters + i)].value / 20);
		}
		costFight /= fightingFighter.length;
		gainFight /= fightingFighter.length;
		
		// if player can afford to loose
		if((costBeer + costFight) <= player.money){
			result = [costBeer, costFight, gainFight, true, true];
		} else {
			// announce not enough money
			announceFighting(7, "", "");
			
			result = [costBeer, costFight, gainFight, false, true];
		}
	} else {
		// announce fighters are occupied
		for(i = 1; i < occupiedArray.length; i++) {
			announceFighting(6, fightingFighter[(i - 1)].name, fightingFighter[(i - 1)].occupied);				
		}
	}
	return result;
}

/*
* check wether all fighter have time to fight
* @param fightingFighter, array
* @return true, if no fighter is occupied
*/
function checkTimeArray(fightingFighter) {
	var result = new Array();
	var i = 0;
	result[0] = true;
	for(i = 0; i < fightingFighter.length; i++) {
		if(fightingFighter[i].occupied >= new Date().getTime()) {
			result[0] = false;
			result.push(i);
		}
	}
	return result;
}