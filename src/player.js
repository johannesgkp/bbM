/*
* Constructor for player
* blablaMin is the smallest value that a variable can have
* blablaMax is the biggest value, that can be added to the blablaMin value
* there for the actual maxValue is blablaMin + blablaMax
* @param 
*/
function Player(id, name, money, beerId) {
	// int
	this.id = id;
	// string
	this.name = name;	
	// int
	this.money = money;
	// int
	this.beerId = beerId;
}

/*
* changingMoney
* @param ammount, int 
*/
Player.prototype.changingMoney = function(ammount) 
	ammountI = parseInt(ammount);
	if((ammountI >= 0) || (this.money >= ammountI)) {
		this.money += ammountI;
		return true;
	}
	return false;
};

/*
* setBeerId
* @param BeerId, int 
*/
Player.prototype.setBeerId = function(beerId) {
	if(!getBeer) {
		return false;
	}
	this.beerId = beerId;
	return true;
};