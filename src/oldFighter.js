/*
* Constructor for fightingFighter
* @param
*/
function OldFighter(oldFighterArray) {	
	this.name = oldFighterArray.name;	
	this.speedRun = parseInt(oldFighterArray.speedRun);
	this.speedDrink = parseInt(oldFighterArray.speedDrink);
	this.mouthCapacity = parseInt(oldFighterArray.mouthCapacity);
	this.speedThrow = parseInt(oldFighterArray.speedThrow);
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
OldFighter.prototype = Object.create(Fighter.prototype); // inherit functions from Fighterclass

// use own construtor
OldFighter.prototype.constructor = OldFighter;