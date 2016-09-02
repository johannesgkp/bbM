/*
* 
*/
function train() {
	phase = 1;
	fighterToDDL(fighterArray); //loadingFighters.js
	document.getElementById("fighterDDL").style.display = "block";
	document.getElementById("runButton").style.display = "inline";
	document.getElementById("drinkButton").style.display = "inline";
	document.getElementById("throwButton").style.display = "inline";
	
	document.getElementById("purchaseButton").style.display = "none";
	
	var table = document.getElementById("announcements");
	while(table.rows[0]) {
		table.deleteRow(0);
	}
}

/*
* 
*/
function runTraining(fighterNumber) {
	fighterArray[fighterNumber].occupied = addMinutes(5);
	fighterArray[fighterNumber].speedRun = parseInt(fighterArray[fighterNumber].speedRun) + 1;
	announceTraining(0, fighterArray[fighterNumber].name, fighterArray[fighterNumber].occupied);			
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + run + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
	save();
}

/*
* 
*/
function drinkTraining(fighterNumber) {
	fighterArray[fighterNumber].occupied = addMinutes(5);
	fighterArray[fighterNumber].speedDrink = parseInt(fighterArray[fighterNumber].speedDrink) + 1;
	fighterArray[fighterNumber].drinkHoldability = parseInt(fighterArray[fighterNumber].drinkHoldability) + 0.1;
	fighterArray[fighterNumber].mouthCapacity = parseInt(fighterArray[fighterNumber].mouthCapacity) + 0.1;
	announceTraining(1, fighterArray[fighterNumber].name, fighterArray[fighterNumber].occupied);		
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + drink + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
	save();
}

/*
* 
*/
function throwTraining(fighterNumber) {
	console.log(fighterArray[fighterNumber].occupied);
	fighterArray[fighterNumber].occupied = addMinutes(5);
	console.log(fighterArray[fighterNumber].occupied);
	fighterArray[fighterNumber].speedThrow = parseInt(fighterArray[fighterNumber].speedThrow) + 1;
	fighterArray[fighterNumber].accuracy = parseInt(fighterArray[fighterNumber].accuracy) + 0.5;
	announceTraining(2, fighterArray[fighterNumber].name, fighterArray[fighterNumber].occupied);		
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + thro + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
	save();
}

/*
* @param callback specifies which training is done
*/
function checkTime(callback) {
	var fighterDDL = document.getElementById("fighterDDL");
	var fighterNumber = fighterDDL.options[fighterDDL.selectedIndex].value;
	
	if(fighterNumber == "") {
		alert(selectAFighter);
	} else {
		if(fighterArray[fighterNumber].occupied < new Date().getTime()) {
			if(typeof(callback) == "function") {
				callback(fighterNumber);
			} else {
				console.log("callback is not a function");
				console.log(callback);			
			}
		} else {
			announceTraining(999, fighterArray[fighterNumber].name, fighterArray[fighterNumber].occupied);		
			//console.log(fighterArray[fighterNumber].name + trainsAllready + " " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
		}		
	}
}

/*
* @param minutes those will be added to the current time
* @return a Date
*/
function addMinutes(minutes) {
	var seconds = (minutes * 60000)
    return (new Date().getTime() + seconds);
}