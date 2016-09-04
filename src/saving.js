/*
* 
*/
function save() {	
	phase = 3;
	saveFighter();
	savePlayer();
}

/*
* updates the player (money, and beerId) ath the db using the id
*/
function savePlayer() {	
	var i = 0;
	var table = document.getElementById("announcements");
	var tableRow = table.insertRow(0);
	
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onload = function() {
		var ray = xmlhttp.responseText;
		console.log(player.name + ": " + ray);		
		//tableRow.innerHTML = ray;	
	};	
	xmlhttp.open("GET", "savePlayer.php?id=" +  player.id + "&money=" +  Math.round(player.money) + "&beerId=" +  player.beerId, true);		
	xmlhttp.send();
}

/*
* updates/inserts the fighter at the db using the id
*/
function saveFighter() {	
	var i = 0;
	
	for(i = 0; i < fighterArray.length; i++){	
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onload = function() {
			var ray = xmlhttp.responseText;
			console.log("Fighter: " + ray);		
		};	
		if(fighterArray[i].id == undefined) {
			xmlhttp.open("GET", "saveNewFighter.php?name=" + fighterArray[i].name + "&speedRun=" + fighterArray[i].speedRun + "&speedDrink=" + fighterArray[i].speedDrink + "&mouthCapacity=" + fighterArray[i].mouthCapacity + "&speedThrow=" + fighterArray[i].speedThrow + "&accuracy=" + fighterArray[i].accuracy + "&luck=" + fighterArray[i].luck + "&drinkHoldability=" + fighterArray[i].drinkHoldability + "&influence=" + Math.round(fighterArray[i].influence) + "&occupied=" + fighterArray[i].occupied + "&playerId=" + fighterArray[i].playerId +  "&value=" + fighterArray[i].value, true);		
		} else {
			xmlhttp.open("GET", "saveFighter.php?id=" + fighterArray[i].id + "&name=" + fighterArray[i].name + "&speedRun=" + fighterArray[i].speedRun + "&speedDrink=" + fighterArray[i].speedDrink + "&mouthCapacity=" + fighterArray[i].mouthCapacity + "&speedThrow=" + fighterArray[i].speedThrow + "&accuracy=" + fighterArray[i].accuracy + "&luck=" + fighterArray[i].luck + "&drinkHoldability=" + fighterArray[i].drinkHoldability + "&influence=" + Math.round(fighterArray[i].influence) + "&occupied=" + fighterArray[i].occupied + "&value=" + fighterArray[i].value, true);		
		}
		xmlhttp.send();
	}
	// so that newly bought fighter are also in the fighterArray
	loadFighter();
}

/*
* test
*/
function saveFighter2() {	
	var i = 0;
	var table = document.getElementById("announcements");
	var tableRow = table.insertRow(0);
	
	while(table.rows[1]) {
		table.deleteRow(0);
	}	
	tableRow.insertCell(0).innerHTML = nameSen;
	tableRow.insertCell(1).innerHTML = speedRunSen;
	tableRow.insertCell(2).innerHTML = speedDrinkSen;
	tableRow.insertCell(3).innerHTML = mouthCapacitySen;
	tableRow.insertCell(4).innerHTML = maxSpeedThrowSen;
	tableRow.insertCell(5).innerHTML = accuracySen;
	tableRow.insertCell(6).innerHTML = drinkHoldabilitySen;
	tableRow.insertCell(7).innerHTML = priceSen;
	
	for(i = 0; i < fighterArray.length; i++){	
		var xmlhttp = new XMLHttpRequest();
		tableRow = table.insertRow(1);

		xmlhttp.onload = function() {
			var ray = xmlhttp.responseText;
			console.log(ray);		
			tableRow.innerHTML = ray;	
		};	
		console.log(fighterArray[i].name + " " + fighterArray[i].id);
		if(fighterArray[i].id == undefined) {
			console.log(fighterArray[i].name);
			xmlhttp.open("GET", "saveNewFighter.php?name=" + fighterArray[i].name + "&speedRun=" + fighterArray[i].speedRun + "&speedDrink=" + fighterArray[i].speedDrink + "&mouthCapacity=" + fighterArray[i].mouthCapacity + "&maxSpeedThrow=" + fighterArray[i].maxSpeedThrow + "&accuracy=" + fighterArray[i].accuracy + "&luck=" + fighterArray[i].luck + "&drinkHoldability=" + fighterArray[i].drinkHoldability + "&influence=" + fighterArray[i].influence + "&trainingEnd=" + fighterArray[i].trainingEnd + "&playerId=" + fighterArray[i].playerId +  "&value=" + fighterArray[i].value, true);		
		} else {
			xmlhttp.open("GET", "saveFighter.php?id=" + fighterArray[i].id + "&speedRun=" + fighterArray[i].speedRun + "&speedDrink=" + fighterArray[i].speedDrink + "&mouthCapacity=" + fighterArray[i].mouthCapacity + "&maxSpeedThrow=" + fighterArray[i].maxSpeedThrow + "&accuracy=" + fighterArray[i].accuracy + "&luck=" + fighterArray[i].luck + "&drinkHoldability=" + fighterArray[i].drinkHoldability + "&influence=" + fighterArray[i].influence + "&trainingEnd=" + fighterArray[i].trainingEnd + "&value=" + fighterArray[i].value, true);		
		}
		xmlhttp.send();

		tableRow.insertCell(0).innerHTML = fighterArray[i].name;
		tableRow.insertCell(1).innerHTML = fighterArray[i].speedRun;
		tableRow.insertCell(2).innerHTML = fighterArray[i].speedDrink;
		tableRow.insertCell(3).innerHTML = fighterArray[i].mouthCapacity;
		tableRow.insertCell(4).innerHTML = fighterArray[i].maxSpeedThrow;
		tableRow.insertCell(5).innerHTML = fighterArray[i].accuracy;
		tableRow.insertCell(6).innerHTML = fighterArray[i].drinkHoldability;
		tableRow.insertCell(7).innerHTML = fighterArray[i].value;
	}
}