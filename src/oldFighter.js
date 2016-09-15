/*
* Constructor for fighter, that where loaded from the db
* they need to optain the functions (throw, ctach...)
* @param oldFighterObject, contains all the values a fighter needs
*/
function OldFighter(oldFighterObject) {	
	this.name = oldFighterObject.name;	
	this.speedRun = parseInt(oldFighterObject.speedRun);
	this.speedDrink = parseInt(oldFighterObject.speedDrink);
	this.mouthCapacity = parseInt(oldFighterObject.mouthCapacity);
	this.strengthArm = parseInt(oldFighterObject.strengthArm);
	this.accuracy = parseInt(oldFighterObject.accuracy);
	this.luck = parseInt(oldFighterObject.luck);
	this.drinkHoldability = parseInt(oldFighterObject.drinkHoldability);
	this.influence = parseInt(oldFighterObject.influence);
	this.beer = getBeer(0);
	this.occupied = parseInt(oldFighterObject.occupied);
	this.born = parseInt(oldFighterObject.born);
	this.id =  parseInt(oldFighterObject.id);
	this.playerId =  parseInt(oldFighterObject.playerId);
	this.value =  parseInt(oldFighterObject.value);
}

// inherit functions from Fighterclass
OldFighter.prototype = Object.create(Fighter.prototype);

// use own construtor
OldFighter.prototype.constructor = OldFighter;