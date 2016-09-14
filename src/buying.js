/*
* adds a fighter from this.buyableFighter to your fighterArray if you cann afford it
*/
Game.prototype.purchase = function(fighterNumber) {	
	// if you can afford the fighter
	if(this.player.money >= this.buyableFighter[fighterNumber].value){
		// pay
		this.player.money -= this.buyableFighter[fighterNumber].value;
		// add the fighter to your fighterArray
		this.fighterArray[this.fighterArray.length] = this.buyableFighter[fighterNumber];
		// announce buying
		table.insertRow(0).innerHTML = this.purchasedSen + " " + this.buyableFighter[fighterNumber].name + ".";
		// remove bought fighter form the this.buyableFighter
		this.buyableFighter.splice(fighterNumber, 1);
	} else {	
		// announce that you dont have enough money
		table.insertRow(0).innerHTML = this.notEnoughMoneySen + " " + this.buyableFighter[fighterNumber].name + ".";
	}
	this.guiBuy();
};

/*
* creates fighters, that can be bought
* only creates Fighter in the same range at the Time
* later it should be like 3 bad 3 middle and 3 good(expansive) fighters
*/
Game.prototype.getGoods = function() {
	var i = 0;
	var numberOffers = 6;
	
	for(i = 0; i < numberOffers; i++){
		this.buyableFighter[i] = this.getFighter();
	}
};