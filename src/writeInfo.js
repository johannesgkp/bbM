/*
* 
*/
Game.prototype.announceTraining = function(nr, name, info) {
    var x = this.table.insertCell(0);
	var y = name;
	var time = new Date(parseInt(info));
	var hour = time.getHours();
	// because time is 2 hours behind germany
	time.setHours(hour + 2);
	time = time.toUTCString();
	
	if(nr < 1){
		y += (" " + this.willSen + " " + this.runSen + " " + this.untilSen + ": " + time);
	} else if (nr < 2) {
		y += (" " + this.willSen + " " + this.drinkSen + " " + this.untilSen + ": " + time);
	} else if (nr < 3) {
		y += (" " + this.willSen + " " + this.throwSen + " " + this.untilSen + ": " + time);
	} else {
		y +=(" " + this.isBusySen + " " + this.untilSen + ": " + time);
	}
    x.innerHTML = y;
};

/*
* 
*/
Game.prototype.clearTable = function() {
	var table = document.getElementById("announcements");
	while(table.rows[0]) {
		table.deleteRow(0);
	}
};

/*
* 
*/
Game.prototype.smalLineTable = function() {
    var x = document.getElementById("announcements").insertRow(numberOfFightingFighter).insertCell(0);
    x.innerHTML = "-------------------------";
};

/*
* 
*/
Game.prototype.announceFighting = function(nr, name, info) {
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
		y = ("<font color='#cccc00'>" + name + " " + this.FinishesSen + " " + this.HisBeerSen + ".</font>");		
	} else if(nr == 1) {
		y = ("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + name + " " + this.DrinksSen + " " + info);
	}  else if(nr == 2) {
		if(parseInt(info) == 0) {
			y += (" " + this.MissesSen + ".");		
			// light green
			y = ("<font color='#49d049'>" + name + " " +this.MissesSen + ".</font>");
		} else if(parseInt(info) < 166) {
			y += (" " + this.ThrowsSen + " " + this.AndHitsSen + ".");	
		} else {
			// lila
			y = ("<font color='#6600cc'>" + name + " " + this.ThrowsSen + " " + this.RealHardSen + " " + this.AndHitsSen + ".</font>");			
		}
	}  else if(nr == 3) {
		// golden
		y = ("<font color='#999900'>" + name + " " + this.WinsSen + ".</font>");
	}  else if(nr == 4) {
		
	}  else if(nr == 5) {
		y += (teamSen + " " + info + ":");
	}  else if(nr == 6) {
		y += (" " + this.isBusySen + "s " + this.untilSen + ": " + time + " " + this.thereForHeCannotFightSen);
	}  else if(nr == 7) {
		y += (this.notEnoughMoneyForTheBeerAndStuffSen);
	}  else if(nr == 8) {
		y += (" " + this.chucksHisBeerSen + ".");
	} else {
		y += nr + info;
	}
    x.innerHTML = y;
	//console.log("nr: " + nr + " " + "name: " + name + " " + "info: " + info + " " + "y: " + " " + y);
};

/*
* 
*/
Game.prototype.loadTopHUD = function() {
	document.getElementById("topHUD").innerHTML = this.player.name + " " + Math.round(this.player.money) + "$";
};

/*
* 
*/
Game.prototype.firstLine = function() {
	var table = document.getElementById("announcements");  
	tableRow = table.insertRow(0);
	
	tableRow.insertCell(0).innerHTML = this.nameSen;
	tableRow.insertCell(1).innerHTML = this.speedRunSen;
	tableRow.insertCell(2).innerHTML = this.speedDrinkSen;
	tableRow.insertCell(3).innerHTML = this.mouthCapacitySen;
	tableRow.insertCell(4).innerHTML = this.strengthArmSen;
	tableRow.insertCell(5).innerHTML = this.accuracySen;
	tableRow.insertCell(6).innerHTML = this.drinkHoldabilitySen;
	tableRow.insertCell(7).innerHTML = this.priceSen;
};

/*
* 
*/
Game.prototype.checkAll = function() {
	var teamCheckBoxes = document.getElementsByName("team");
	var i = 0;
	for(i = 0; i < teamCheckBoxes.length; i++) {
		teamCheckBoxes[i].checked = true;
	}
};

/*
* 
*/
Game.prototype.unCheckAll = function() {
	var teamCheckBoxes = document.getElementsByName("team");
	var i = 0;
	for(i = 0; i < teamCheckBoxes.length; i++) {
		teamCheckBoxes[i].checked = false;
	}
};

/*
* 
*/
Game.prototype.announceArrayOfFighter = function(arrayOfFighter, fighterNumber) {
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
};

/*
* 
*/
Game.prototype.announceArrayOfFighterRadioButton = function(arrayOfFighter, fighterNumber) {
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
	
};