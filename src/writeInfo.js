/*
* 
*/
function announceTraining(nr, name, info) {   
	var table = document.getElementById("announcements").insertRow(0);
    var x = table.insertCell(0);
	var y = name;
	var time = new Date(parseInt(info));
	var hour = time.getHours();
	// because time is 2 hours behind germany
	time.setHours(hour + 2);
	time = time.toUTCString();
	
	if(nr < 1){
		y += (" " + willSen + " " + runSen + " " + untilSen + ": " + time);
	} else if (nr < 2) {
		y += (" " + willSen + " " + drinkSen + " " + untilSen + ": " + time);
	} else if (nr < 3) {
		y += (" " + willSen + " " + throwSen + " " + untilSen + ": " + time);
	} else {
		y +=(" " + isBusySen + " " + untilSen + ": " + time);
	}
    x.innerHTML = y;
}

/*
* 
*/
function clearTable() {   	
	var table = document.getElementById("announcements");
	while(table.rows[0]) {
		table.deleteRow(0);
	}
}

/*
* 
*/
function announceFighting(nr, name, info) {
    var table = document.getElementById("announcements").insertRow(numberOfFightingFighter);
    var x = table.insertCell(0);
	var y = name;
    //var y = table.insertCell(1);
    //var z = table.insertCell(2);
	var time = new Date(parseInt(info));
	var hour = time.getHours();
	// because time is 2 hours behind germany
	time.setHours(hour + 2);
	time = time.toUTCString();
	
	if(nr == 0) {
		// yellow
		y = ("<font color='#cccc00'>" + name + " " + FinishesSen+ " " + HisBeerSen + ".</font>");		
	} else if(nr == 1) {
		y += (" " + DrinksSen + " " + info);
	}  else if(nr == 2) {
		if(parseInt(info) == 0) {
			y += (" " + MissesSen + ".");		
			// light green
			y = ("<font color='#49d049'>" + name + " " + MissesSen + ".</font>");
		} else if(parseInt(info) < 30) {
			y += (" " + ThrowsSen + " " + AndHitsSen + ".");	
		} else if(parseInt(info) < 75) {
			// lila
			y = ("<font color='#6600cc'>" + name + " " + ThrowsSen + " " + RealHardSen + " " + AndHitsSen + ".</font>");			
		}
	}  else if(nr == 3) {
		// golden
		y = ("<font color='#999900'>" + name + " " + WinsSen + ".</font>");
	}  else if(nr == 4) {
		
	}  else if(nr == 5) {
		y += (teamSen + " " + info + ":");
	}  else if(nr == 6) {
		y += (" " + isBusySen + "s " + untilSen + ": " + time + " " + thereForHeCannotFightSen);
	}  else if(nr == 7) {
		y += (notEnoughMoneyForTheBeerAndStuffSen);
	}  else if(nr == 8) {
		y += (" " + chucksHisBeerSen + ".");
	} else {
		y += nr + info;
	}
    x.innerHTML = y;
}

/*
* 
*/
function loadTopHUD() {
	document.getElementById("topHUD").innerHTML = player.name + " " + Math.round(player.money) + "$";
}

/*
* 
*/
function firstLine() { 
	var table = document.getElementById("announcements");  
	tableRow = table.insertRow(0);
	
	tableRow.insertCell(0).innerHTML = nameSen;
	tableRow.insertCell(1).innerHTML = speedRunSen;
	tableRow.insertCell(2).innerHTML = speedDrinkSen;
	tableRow.insertCell(3).innerHTML = mouthCapacitySen;
	tableRow.insertCell(4).innerHTML = speedThrowSen;
	tableRow.insertCell(5).innerHTML = accuracySen;
	tableRow.insertCell(6).innerHTML = drinkHoldabilitySen;
	tableRow.insertCell(7).innerHTML = priceSen;
}

/*
* 
*/
function announceArrayOfFighter(arrayOfFighter, fighterNumber) {
	if(fighterNumber < 0) {
		fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;		
	}
	var tableRow = document.getElementById("announcements").insertRow(1);
	
	tableRow.insertCell(0).innerHTML = arrayOfFighter[fighterNumber].name;
	tableRow.insertCell(1).innerHTML = arrayOfFighter[fighterNumber].speedRun;
	tableRow.insertCell(2).innerHTML = arrayOfFighter[fighterNumber].speedDrink;
	tableRow.insertCell(3).innerHTML = arrayOfFighter[fighterNumber].mouthCapacity;
	tableRow.insertCell(4).innerHTML = arrayOfFighter[fighterNumber].speedThrow;
	tableRow.insertCell(5).innerHTML = arrayOfFighter[fighterNumber].accuracy;
	tableRow.insertCell(6).innerHTML = arrayOfFighter[fighterNumber].drinkHoldability;
	tableRow.insertCell(7).innerHTML = arrayOfFighter[fighterNumber].value;
}

/*
* encodes the fighter of the player
* @param responseFighter, the fighter from the db as an array encoded as json
*/
function fighterToDDL(fighterA) {
		var ddl = document.getElementById("fighterDDL");	
		ddl.options.length=0;	
		var y;
		var j = 0;
		
		if (fighterA.length <= 0) {
			y = document.createElement("option");
			y.text = "You got no Fighter.";
			ddl.add(y,ddl.options[null]);
		} else {	
			for(j = 0; j < fighterA.length; j++) {
				y = document.createElement("option");
				y.text = fighterA[j].name;
				y.value = j;
				ddl.add(y,ddl.options[null]);
			}	
		}
}