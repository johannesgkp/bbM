/*
* Constructor for fightingFighter
* @param
*/
function Fighter(speedRunMin, speedRunMax, speedDrinkMin, speedDrinkMax, mouthCapacityMin, mouthCapacityMax, speedThrowMin, speedThrowMax, accuracyMin, accuracyMax, luckMin, luckMax, drinkHoldabilityMin, drinkHoldabilityMax, valueMax) {
	this.name = getName();				
	// in m/h
	this.speedRun =  Math.round((parseInt(speedRunMin) + (Math.random() * speedRunMax)));
	// in sec
	this.speedDrink =  Math.round((parseInt(speedDrinkMin) + (Math.random() * speedDrinkMax)));
	// in ml
	this.mouthCapacity =  Math.round((parseInt(mouthCapacityMin) + (Math.random() * mouthCapacityMax)));
	// in m/h
	this.speedThrow =  Math.round((parseInt(speedThrowMin) + (Math.random() * speedThrowMax)));
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
	//
	this.born = 0;
	//
	this.id = undefined;
	// int
	this.playerId = readCockie("playerId");
	// in euro
	this.value = Math.round(Math.random() * valueMax) + this.speedRun + this.speedDrink + this.mouthCapacity + this.speedThrow + this.accuracy + this.drinkHoldability;
}

/*
* drinking
* @param time, how long can the player drink
*/
Fighter.prototype.drinking = function(time) {
	// how often can the fighter empty his mouth and how much beer fits in his mouth
	var dri = Math.round((((time / this.speedDrink) * this.rndm()) * this.mouthCapacity));
	
	if((this.beer.liter < dri) && (this.beer.liter != 0)){
		//finished beer
		announceFighting(0, this.name, "");
		this.beer.liter = 0; 				
	} else if(this.beer.liter != 0) {
		//normal drink
		announceFighting(1, this.name, (dri + "/" + this.beer.liter));
		this.beer.liter -= dri;
		this.influence = (this.influence +((dri / this.beer.capacity) * this.beer.alcoholByVolume));
	}
};

/*
* throwing
* @return meter
*/
Fighter.prototype.throwing = function(fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack) {
	var result;
	// influence depending on trinkfestigkeit
	var infl = ((this.drinkHoldability - Math.max(this.drinkHoldability, this.influence)) * 5);
	// accu is not in %
	var accu = (((this.accuracy + infl) * this.rndm()) / 100);
	var strength = ((accu * this.speedThrow) - ((fieldLength / 2) / 100));
	
	if((accu > accuracyNeededToHitBottle) && ((strength > strengthNeededToHitBottle))) {
		if(accu > accuracyNeededToBounceBack) {
			result = ((fieldLength / 2) + (strength / 2));
		} else {
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
* @param throwOutcome, int how good was the throw
* @return int time the player needed to catch
*/
Fighter.prototype.catching = function(meterToRun) {
	// * 2 because the fighter has tu run back after catching
	return ((meterToRun * 2) / this.speedRun)
};

/*
* @return int how fast did the player catch
*/
Fighter.prototype.rndm = function(throwOutcome, fieldLength) {
	return Math.min((Math.random() + this.luck), 1);
};

/*
* 
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
	"ThomAss",
	"Buffy"
	];
	return names[Math.round(Math.random() * (names.length - 1))];
}