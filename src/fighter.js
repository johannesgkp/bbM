function getFighter() {
	return new Fighter(90, 20, 15, 10, 23, 5, 60, 15, 33, 15, 33, 15, 3, 4, 20);
}


/*
* Constructor for fighter
* blablaMin is the smallest value that a variable can have
* blablaMax is the biggest value, that can be added to the blablaMin value
* there for the actual maxValue is blablaMin + blablaMax
* @param speedRunMin
* @param speedRunMax
* @param speedDrinkMin
* @param speedDrinkMax
* @param mouthCapacityMin
* @param mouthCapacityMax
* @param strengthArmMin
* @param strengthArmMax
* @param accuracyMin
* @param accuracyMax
* @param luckMin
* @param luckMax
* @param drinkHoldabilityMin
* @param drinkHoldabilityMax
* @param valueMax, max value that is going to be added to the actual value
*/
function Fighter(speedRunMin, speedRunMax, speedDrinkMin, speedDrinkMax, mouthCapacityMin, mouthCapacityMax, strengthArmMin, strengthArmMax, accuracyMin, accuracyMax, luckMin, luckMax, drinkHoldabilityMin, drinkHoldabilityMax, valueMax) {
	// string
	this.name = getName();				
	// in cm/s
	this.speedRun =  Math.round((parseInt(speedRunMin) + (Math.random() * speedRunMax)));
	// in decisec
	this.speedDrink =  Math.round((parseInt(speedDrinkMin) + (Math.random() * speedDrinkMax)));
	// in ml
	this.mouthCapacity =  Math.round((parseInt(mouthCapacityMin) + (Math.random() * mouthCapacityMax)));
	// in cm/s
	this.strengthArm =  Math.round((parseInt(strengthArmMin) + (Math.random() * strengthArmMax)));
	// in %
	this.accuracy = Math.round((parseInt(accuracyMin) + (Math.random() * accuracyMax))); 
	// in %
	this.luck = (parseInt(luckMin) + (Math.random() * luckMax)); 
	// in alcVol?_?
	this.drinkHoldability =  Math.round((parseInt(drinkHoldabilityMin) + (Math.random() * drinkHoldabilityMax)));
	// in alcVol?_?
	this.influence = 0;
	// an object
	this.beer = getBeer(player.beerId);
	// in millisec
	this.occupied = 0;
	// not yet
	this.born = 0;
	// will be set by the db once the fighter is saved for the first time
	this.id = undefined;
	// int
	this.playerId = readCockie("playerId");
	// in euro
	this.value = Math.round(Math.random() * valueMax) + this.speedRun + this.speedDrink + this.mouthCapacity + this.strengthArm + this.accuracy + this.drinkHoldability;
	this.insults = 	getSomeInsults(9, 4);
	this.nervousness = getSomeInsults(999, 4);
	
}

/*
* drinking
* @param time, how long can the fighter drink
*/
Fighter.prototype.drinking = function(time) {
	// how often can the fighter empty his mouth and how much beer fits in his mouth
	var dri = 0;
	
	// if the beer is already empty or there is no time dont do anything
	if((this.beer.liter != 0) && (time > 0)){
		// how often can the fighter empty his mouth and how much beer fits in his mouth
		dri = Math.round((((time / (this.speedDrink / 10)) * this.rndm()) * this.mouthCapacity));
		// if the fighter finishes his beer
		if(this.beer.liter < dri) {
			// finished beer
			announceFighting(0, this.name, "");
			this.beer.liter = 0; 				
		} else {
			// normal drink
			this.beer.liter -= dri;
			// fighter gets more wasted
			//this.influence = (this.influence +((dri / this.beer.capacity) * this.beer.alcoholByVolume));
			announceFighting(1, this.name, (dri + "/" + this.beer.liter));
		}		
	}
};
	
/*
* throwing
* @param fieldLength, in cm
* @param strengthNeededToHitBottle, in *
* @param accuracyNeededToHitBottle, as a float(%)
* @param accuracyNeededToBounceBack, as a float(%)
* @return cm
*/
Fighter.prototype.throwing = function(fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack) {
	var result;
	// influence depending on trinkfestigkeit
	var infl = ((this.drinkHoldability - Math.max(this.drinkHoldability, this.influence)) * 5);
	// accu is not in % but is a float(%) and depends on infl
	var accu = (((this.accuracy + infl) * this.rndm()) / 100);
	// strength from the throw pushes the bottle, but only as hard as accurad as the throw hits the bottle o_O
	// also the length of the field reduces the strength
	var strength = ((accu * this.strengthArm) - (fieldLength / 200));
	
	// if the fighter manages to make the bottle fall
	if((accu > accuracyNeededToHitBottle) && ((strength > strengthNeededToHitBottle))) {
		// if the fighter manages to make the ball bounce back from the bottle, the enemy has to run a bigger distance in order to optain the ball
		if(accu > accuracyNeededToBounceBack) {
			result = ((fieldLength / 2) + (strength / 2));
		} else {
			// else the enemy only hast to run to the middle of the field to put the bottle back up
			result = (fieldLength / 2);	
		}
	} else {
		result = 0;	
	}
	announceFighting(2, this.name, Math.round(result));
	
	return result;
};

/*
* catching
* @param cmToRun, in cm
* @return time the player needed to catch in s
*/
Fighter.prototype.catching = function(cmToRun) {
	// * 2 because the fighter has to run back after catching
	return ((cmToRun * 2) / this.speedRun);
};

/*
* catching
* @param cmToRun, in cm
* @return time the player needed to catch in s
*/
Fighter.prototype.resetBottle = function(cmToRun) {
	// * 2 because the fighter has to run back after catching
	return (((cmToRun * 2) / this.speedRun) + (2 * (1 - (this.accuracy / 100))));
};

/*
* to make the fights less predictable
* @return a random number which is not smaller than fighter.luck or bigger than 1
*/
Fighter.prototype.rndm = function() {
	return Math.min((Math.random() + (this.luck / 100)), 1);
};

/*
* @return a name
*/
function getName() {
	var names = [
	"Ronny",
	"RonnysBruder",
	"RonnysSchwester",
	"RonnysVadder",
	"RonnysMuddi",
	"RonnysAlde",
	"Thorsten",
	"Torben",
	"Thorstiene",
	"Torbina",
	"Peter",
	"Petra",
	"Georg",
	"Alf",
	"Ulf",
	"Svedlahna",
	"Svedlahn",
	"Tim",
	"Timo",
	"Tima",
	"Struppi",
	"Struppo",
	"Justus",
	"Jupiter",
	"Bob",
	"Roberta",
	"Berta",
	"Guenther",
	"Zwantje",
	"Achmud",
	"Mingo",
	"Lotto",
	"Milla",
	"Lasse",
	"Rolf",
	"Achim",
	"Raul",
	"Olaf",
	"Olga",
	"UrangutanKlaus",
	"Telephonmann",
	"Telephonfrau",
	"OnePunshMan",
	"OnePunshWoMan",
	"Arale",
	"Ruffy",
	"Struffy",
	"Jakub",
	"Rufus",
	"Molly",
	"ContraMolly",
	"ProMolly",
	"Pay",
	"Bent",
	"Musashi",
	"Gon",
	"Pipi",
	"CyborgNr20",
	"Tom",
	"Harry",
	"Gott",
	"MutenRoshi",
	"M45T0|2",
	"Knut",
	"Alfredo",
	"Trunks",
	"Uwe",
	"Helga",
	"Snoopy",
	"Hildegunst",
	"Pascal",
	"Kevin",
	"Mutombo",
	"Angelo",
	"Garry",
	"Golgo",
	"Jah",
	"Homer",
	"Barney",
	"JackieBrown",
	"Kai",
	"Duc",
	"Phistomefel",
	"MrPink",
	"Quentin",
	"Silvio",
	"Elfriede",
	"Jutta",
	"Tyron",
	"Tron",
	"Thomass",
	"PrinzPorno",
	"Bronco",
	"Buffy"
	];
	return names[Math.round(Math.random() * (names.length - 1))];
}

/*
* @return a name
*/

function getInsult(nr) {
	var result;
		
	var insults = [
	[0, "Daneben!"],
	[1, "Vorbei!"],
	[2, "Achtung!"],
	[3, "Polizei!"],
	[4, "Regelverstoss!"],
	[5, "Uebertreten!"],
	[6, "Schneller!"],
	[7, "Machmal!"],
	[8, "Zeit!"],
	
	[9, "Schluepper rutscht!"],
	[10, "Hose rutscht!"],
	[11, "Deine Mudda steht hinter Dir!"],
	
	[12, "Du triffst nie!"],
	[13, "Du hast schon letzte Runde nicht getroffen!"],
	[14, "Du triffst sowieso nicht!"],
	[15, "Hast Du ueberhaupt schon mal getroffen?"],
	[16, "Weiter links!"],
	[17, "Weiter rechts!"],
	[18, "Du musst die Flasche treffen!"],
	
	[19, "Lass Dich nicht ablenken!"],
	[20, "Konzentrier Dich!"],
	
	[21, "Bist Du ueberhaupt dran?"],
	[22, "Du bist nicht dran, Du Trottel!"],
	
	[23, "Ist sowieso ega, naechste Runde bin ich fertig!"]
	];
	
	if(nr < 0) {
		result = insults.length;;
	} else if (nr >= insults.length) {
		nr = 0;
	}
	
	if(nr >= 0) {
		result = insults[nr][1];
	}
	
	return result;
}

/*
* @return a name
*/

function getSomeInsults(knowledge, ammount) {
	var result;
	var nr = 0;
	var i = 0;
	
	var insultsLength = getInsult(-1);
	
	if(knowledge < 1) {
		knowledge = 1;
	} else if(knowledge >= insultsLength) {
		knowledge = (insultsLength - 1);
	}
	
	if(ammount > knowledge) {
		ammount = knowledge;
	}
	
	result = new Array(ammount);
	
	for(i = 0; i < ammount; i++) {
		nr = Math.round(Math.random() * (knowledge));
		if(result.indexOf(nr) == -1) {
			result[i] = nr;	
		} else {
			i--;
		}
	}
	return result;
}
	// in cm/s
	//speedRun = 100
	// in sec
	//.speedDrink = 1.5
	// in ml
	//.mouthCapacity = 25  
	// in *
	//.strengthArm =  10
	// in %
	//.accuracy = 40
	// in %
	//.luck = 10
	// in alcVol?_?
	//.drinkHoldability =  5

/*
* drinking
* @param time, how long can the fighter drink
*/
Fighter.prototype.drinkingTest = function(time) {
	// how often can the fighter empty his mouth and how much beer fits in his mouth
	return dri = Math.round((((time / (this.speedDrink / 10)) * this.rndm()) * this.mouthCapacity));
};

/*
* catching
* @param cmToRun, in cm
* @return time the player needed to catch in s
*/
Fighter.prototype.catchingTest = function(cmToRun) {
	// * 2 because the fighter has to run back after catching
	return ((cmToRun * 2) / this.speedRun);
};


Fighter.prototype.throwingTest = function(fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack) {
	var result = new Array();
	// influence depending on trinkfestigkeit
	var infl = ((this.drinkHoldability - Math.max(this.drinkHoldability, this.influence)) * 5);
	// accu is not in % but is a float(%) and depends on infl
	var accu = (((this.accuracy + infl) * this.rndm()) / 100);
	// strength from the throw pushes the bottle, but only as hard as accurad as the throw hits the bottle o_O
	// also the length of the field reduces the strength
	var strength = ((accu * this.strengthArm) - (fieldLength / 200));
	
	// if the fighter manages to make the bottle fall
	if((accu > accuracyNeededToHitBottle) && ((strength > strengthNeededToHitBottle))) {
		// if the fighter manages to make the ball bounce back from the bottle, the enemy has to run a bigger distance in order to optain the ball
		if(accu > accuracyNeededToBounceBack) {
			result[0] = ((fieldLength / 2) + strength);
		} else {
			// else the enemy only hast to run to the middle of the field to put the bottle back up
			result[0] = (fieldLength / 2);	
		}
	} else {
		result[0] = 0;	
	}
	//announceFighting(2, this.name, Math.round(result));
	
	result[1] = accu;
	result[2] = strength;
	
	return result;
};