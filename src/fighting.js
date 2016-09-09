/*
* 
*/
function prepareFight() {	
	phase = 0;
	
	guiFight()
	
	// how much the player has to pay if he losses (but not the beercost)
	var costBeerFightGain = [0, 0, 0];
	var i = 0;
	// the first half of the array are the fighter from the player, the second half are the other team
	var fightingFighter = new Array;
	// nessecarie for the GUI because the teams are announced at the top of the table, so the fighting announcments have to start a few lines later
	numberOfFightingFighter = 0;
	
	// fill the first half of the fightingFighter with the players team
	for(i = 0; i < fighterArray.length; i++) {
		// the fighter need to get a new beer
		fighterArray[i].beer = getBeer(player.beerId);
		fightingFighter[i] = fighterArray[i];
		// announce Teammembernames
		announceFighting(4, fightingFighter[i].name, "");
	}
	
	announceFighting(5, "", "2");
	
	// fill the second half of the fightingFighter with random fighters
	for(i = 0; i < fighterArray.length; i++) {
		fightingFighter[(fighterArray.length + i)] = new Fighter(15, 5, 12, 3, 16, 4, 15, 5, 20, 10, 0.05, 0.1, 3, 5, 20);
		// announce Teammembernames
		announceFighting(4, fightingFighter[(fighterArray.length + i)].name, "");
	}
	
	costBeerFightGain = checkMoneyAndTime(fightingFighter, 0);
	
	// announce Team
	announceFighting(5, "", "1");
	numberOfFightingFighter = (fightingFighter.length + 2);
	
	// cost Fight is 0 if the fighters are already occupied or the player has not enough money
	if(costBeerFightGain[1] > 0) {
		fight(fightingFighter, costBeerFightGain);
		// changes the ammount of money the player has
		loadTopHUD();
		save();
	}
}

/*
* 
*/
function fight(fightingFighter, costBeerFightGain) {	
	// the cost of the beer has been taken from the player
	loadTopHUD();

	var gameOver = false;
	// right now the active fighter is the first member of a team but never the second or third... 
	var activeFighter = 0;
	var i = 0;
	var numberOfRounds = 0;
	
	var accuracyNeededToHitBottle = 0.09;
	var accuracyNeededToBounceBack = 0.3;
	// in m/h
	var strengthNeededToHitBottle = 2;
	// in cm
	var fieldLength = 100;
	
	// in m
	var throwOutcome;
	// in s
	var catchTime;
	
	player.money -= costBeerFightGain[0];
	
	while((!gameOver) && (numberOfRounds < 500)) {
		numberOfRounds++;
		// activeFighter throws
		throwOutcome = fightingFighter[activeFighter].throwing(fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack);
		// first member of oppsite team catches
		catchTime = fightingFighter[((activeFighter + (fightingFighter.length / 2)) % fightingFighter.length)].catching(throwOutcome);
		gameOver = true;
		
		//everybody from one team drinks
		for(i = 0; i < (fightingFighter.length / 2); i++) {
			fightingFighter[(i + activeFighter)].drinking(catchTime);
			if(fightingFighter[(i + activeFighter)].beer.liter != 0){
				// if one member of the team still has beer left the game isnt over
				gameOver = false;
			}
		}
		if(!gameOver) {
			activeFighter = ((activeFighter + (fightingFighter.length / 2)) % fightingFighter.length);	
		}
	}
	
	for(i = 0; i < (fightingFighter.length / 2); i++) {
		// winner
		announceFighting(3, fightingFighter[(activeFighter + i)].name, "");
	}
	
	if(activeFighter >= ((fightingFighter.length / 2) - 1)) {
		// lost
		player.money -= costBeerFightGain[1];
	} else {
		// win
		player.money += costBeerFightGain[2];
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
* cost and gain are computet the same way
* average values of the fighter of one team / 20
* @param fightingFighter array
* @return array [cost of beer, cost you have to pay if you loose, money(gain) you win]
*/
function checkMoneyAndTime(fightingFighter) {
	var i = 0;
	// if all fighter arent occupied
	if(checkTimeArray(fightingFighter)) {
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
			return [costBeer, costFight, gainFight];
		} else {
			// announce not enough money
			announceFighting(7, "", "");
			return [0, 0, 0];
		}
	} else {
		// announce fighters are occupied
		announceFighting(6, fightingFighter[i].name, fightingFighter[i].occupied);	
		return [0, 0, 0];
	}
}

/*
* check wether all fighter have time to fight
* @param fightingFighter, array
* @return true, if no fighter is occupied
*/
function checkTimeArray(fightingFighter) {
	var i = 0;
	for(i = 0; i < fightingFighter.length; i++) {
		if(fightingFighter[i].occupied >= new Date().getTime()) {
			return false;
		}
	}
	return true;
}