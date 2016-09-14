/*
* 
*/
Game.prototype.save = function() {
	phase = 3;
	this.saveFighter();
	this.savePlayer();
};

/*
* updates the player (money, and beerId) ath the db using the id
*/
Game.prototype.savePlayer = function() {
	var i = 0;	
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onload = function() {
		var ray = xmlhttp.responseText;
		console.log(player.name + ": " + ray);		
		//tableRow.innerHTML = ray;	
	};	
	xmlhttp.open("GET", "savePlayer.php?id=" +  player.id + "&money=" +  Math.round(player.money) + "&beerId=" +  player.beerId, true);		
	xmlhttp.send();
};

/*
* updates/inserts the fighter at the db using the id
*/
Game.prototype.saveFighter = function() {
	var i = 0;
	
	for(i = 0; i < fighterArray.length; i++){	
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onload = function() {
			var ray = xmlhttp.responseText;
			console.log("Fighter: " + ray);		
		};	
		if(fighterArray[i].id == undefined) {
			xmlhttp.open("GET", "saveNewFighter.php?name=" + fighterArray[i].name + "&speedRun=" + fighterArray[i].speedRun + "&speedDrink=" + fighterArray[i].speedDrink + "&mouthCapacity=" + fighterArray[i].mouthCapacity + "&strengthArm=" + fighterArray[i].strengthArm + "&accuracy=" + fighterArray[i].accuracy + "&luck=" + fighterArray[i].luck + "&drinkHoldability=" + fighterArray[i].drinkHoldability + "&influence=" + Math.round(fighterArray[i].influence) + "&occupied=" + fighterArray[i].occupied + "&playerId=" + fighterArray[i].playerId +  "&value=" + fighterArray[i].value, true);		
		} else {
			xmlhttp.open("GET", "saveFighter.php?id=" + fighterArray[i].id + "&name=" + fighterArray[i].name + "&speedRun=" + fighterArray[i].speedRun + "&speedDrink=" + fighterArray[i].speedDrink + "&mouthCapacity=" + fighterArray[i].mouthCapacity + "&strengthArm=" + fighterArray[i].strengthArm + "&accuracy=" + fighterArray[i].accuracy + "&luck=" + fighterArray[i].luck + "&drinkHoldability=" + fighterArray[i].drinkHoldability + "&influence=" + Math.round(fighterArray[i].influence) + "&occupied=" + fighterArray[i].occupied + "&value=" + fighterArray[i].value, true);		
		}
		xmlhttp.send();
	}
	// so that newly bought fighter are also in the fighterArray
	this.loadFighter();
};