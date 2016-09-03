/*
* Constructor for beer
* @param name, string
* @param liter, int how much beer is left in ml
* @param speedDrink, int how fast can you drink from the beer
* @param capacity, in ml
* @param alcoholByVolume, how much alcohol is in the bottle
* @param value, the player has to pay the beer for every fighter
*/
function beerBottle(name, liter, speedDrink, capacity, alcoholByVolume, value) {
	this.name = name;
	this.liter = liter;
	this.speedDrink = speedDrink;
	this.capacity = capacity;
	this.alcoholByVolume = alcoholByVolume;
	this.cost = value;
}

/*
* @param beerId, to identifie which beer is beeing used
* @return beer, construted by beerBottle()
*/
function getBeer(beerId) {
	if(beerId == 0) {
		return new beerBottle("LoewenBraeu", 500, 1, 500, 5.8, 1);
	} else if(beerId == 1) {
		return new beerBottle("Sterni", 500, 1.5, 500, 5, 1);
	} else if(beerId == 2) {
		return new beerBottle("Kindl", 500, 2, 500, 4.8, 3);
	} else if(beerId == 3) {
		return new beerBottle("HassHassHasseroeder", 500, 4, 500, 5, 3);
	} else {
		return new beerBottle("Berliner", 500, 2, 500, 5.1, 4);
	}
}