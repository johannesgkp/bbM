/*
* Constructor for fighter, that where loaded from the db
* they need to optain the functions (throw, ctach...)
* @param oldFighterArray, contains all the values a fighter needs
*/
function OldFighter(oldFighterArray) {	
	this.name = oldFighterArray.name;	
	this.speedRun = parseInt(oldFighterArray.speedRun);
	this.speedDrink = parseInt(oldFighterArray.speedDrink);
	this.mouthCapacity = parseInt(oldFighterArray.mouthCapacity);
	this.strengthArm = parseInt(oldFighterArray.strengthArm);
	this.accuracy = parseInt(oldFighterArray.accuracy);
	this.luck = parseInt(oldFighterArray.luck);
	this.drinkHoldability = parseInt(oldFighterArray.drinkHoldability);
	this.influence = parseInt(oldFighterArray.influence);
	this.beer = getBeer(player.beerId);
	this.occupied = parseInt(oldFighterArray.occupied);
	this.born = parseInt(oldFighterArray.born);
	this.id =  parseInt(oldFighterArray.id);
	this.playerId =  parseInt(oldFighterArray.playerId);
	this.value =  parseInt(oldFighterArray.value);
}

// inherit functions from Fighterclass
OldFighter.prototype = Object.create(Fighter.prototype);

// use own construtor
OldFighter.prototype.constructor = OldFighter;