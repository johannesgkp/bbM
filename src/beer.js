/*
* Constructor for beer
* @param l, int how much beer is left in ml
* @param speedD, int how fast can you drink from the beer
* @param c, capacity in ml
* @param alcoholB, alcoholByVolume
*/
function beerBottle(n, l, speedD, c, alcoholB, value) {
	this.name = n;
	this.liter = l;
	this.speedDrink = speedD;
	this.capacity = c;
	this.alcoholByVolume = alcoholB;
	this.cost = value;
}

/*
*
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