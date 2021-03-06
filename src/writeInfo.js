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
function smalLineTable() {   	
    var x = document.getElementById("announcements").insertRow(numberOfFightingFighter).insertCell(0);
    x.innerHTML = "-------------------------";
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
		y = ("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + name + " " + DrinksSen + " " + info);
	}  else if(nr == 2) {
		if(parseInt(info) == 0) {
			y += (" " + MissesSen + ".");		
			// light green
			y = ("<font color='#49d049'>" + name + " " + MissesSen + ".</font>");
		} else if(parseInt(info) < 166) {
			y += (" " + ThrowsSen + " " + AndHitsSen + ".");	
		} else {
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
	//console.log("nr: " + nr + " " + "name: " + name + " " + "info: " + info + " " + "y: " + " " + y);
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
	tableRow.insertCell(4).innerHTML = strengthArmSen;
	tableRow.insertCell(5).innerHTML = accuracySen;
	tableRow.insertCell(6).innerHTML = drinkHoldabilitySen;
	tableRow.insertCell(7).innerHTML = priceSen;
}

/*
* 
*/
function checkAll() {
	var teamCheckBoxes = document.getElementsByName("team");
	var i = 0;
	for(i = 0; i < teamCheckBoxes.length; i++) {
		teamCheckBoxes[i].checked = true;
	}
}

/*
* 
*/
function unCheckAll() {
	var teamCheckBoxes = document.getElementsByName("team");
	var i = 0;
	for(i = 0; i < teamCheckBoxes.length; i++) {
		teamCheckBoxes[i].checked = false;
	}
}

/*
* 
*/
function announceArrayOfFighter(arrayOfFighter, fighterNumber) {
	if(fighterNumber < 0) {
		fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;		
	}
	var tableRow = document.getElementById("announcements").insertRow(1);
	
	tableRow.insertCell(0).innerHTML = ("<button type='button', onclick= 'purchase(" + fighterNumber + ")' />" + arrayOfFighter[fighterNumber].name + "</button>");
	tableRow.insertCell(1).innerHTML = arrayOfFighter[fighterNumber].speedRun;
	tableRow.insertCell(2).innerHTML = arrayOfFighter[fighterNumber].speedDrink;
	tableRow.insertCell(3).innerHTML = arrayOfFighter[fighterNumber].mouthCapacity;
	tableRow.insertCell(4).innerHTML = arrayOfFighter[fighterNumber].strengthArm;
	tableRow.insertCell(5).innerHTML = arrayOfFighter[fighterNumber].accuracy;
	tableRow.insertCell(6).innerHTML = arrayOfFighter[fighterNumber].drinkHoldability;
	tableRow.insertCell(7).innerHTML = arrayOfFighter[fighterNumber].value;
}

/*
* 
*/
function announceArrayOfFighterRadioButton(arrayOfFighter, fighterNumber) {
	if(fighterNumber < 0) {
		fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;		
	}
	var tableRow = document.getElementById("announcements").insertRow(1);
	
	tableRow.insertCell(0).innerHTML = ("<span><input name='team' type='checkbox' value=" + fighterNumber + " />" + arrayOfFighter[fighterNumber].name + "</span>");
	tableRow.insertCell(1).innerHTML = arrayOfFighter[fighterNumber].speedRun;
	tableRow.insertCell(2).innerHTML = arrayOfFighter[fighterNumber].speedDrink;
	tableRow.insertCell(3).innerHTML = arrayOfFighter[fighterNumber].mouthCapacity;
	tableRow.insertCell(4).innerHTML = arrayOfFighter[fighterNumber].strengthArm;
	tableRow.insertCell(5).innerHTML = arrayOfFighter[fighterNumber].accuracy;
	tableRow.insertCell(6).innerHTML = arrayOfFighter[fighterNumber].drinkHoldability;
	tableRow.insertCell(7).innerHTML = arrayOfFighter[fighterNumber].value;
	
}