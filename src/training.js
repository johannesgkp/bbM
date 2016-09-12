/*
* 
*/
function train() {
	phase = 1;
	
	guiTrain();
}

/*
* 
*/
function runTraining(fighterNumber) {
	fighterArray[fighterNumber].occupied = addMinutes(5);
	fighterArray[fighterNumber].speedRun = parseInt(fighterArray[fighterNumber].speedRun) + 1;
	announceTraining(0, fighterArray[fighterNumber].name, fighterArray[fighterNumber].occupied);			
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + run + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
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
}

/*
* 
*/
function throwTraining(fighterNumber) {
	console.log(fighterArray[fighterNumber].occupied);
	fighterArray[fighterNumber].occupied = addMinutes(5);
	console.log(fighterArray[fighterNumber].occupied);
	fighterArray[fighterNumber].strengthArm = parseInt(fighterArray[fighterNumber].strengthArm) + 1;
	fighterArray[fighterNumber].accuracy = parseInt(fighterArray[fighterNumber].accuracy) + 0.5;
	announceTraining(2, fighterArray[fighterNumber].name, fighterArray[fighterNumber].occupied);		
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + thro + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());

}

/*
* @param callback specifies which training is done
*/
function checkTime(callback) {
	var fighterNumbersArray = getCheckedCheckboxesFor("team", undefined);
	var i = 0;
	for(i = 0; i < fighterNumbersArray.length; i++){
	console.log("drinnen");
		if(fighterArray[fighterNumbersArray[i]].occupied < new Date().getTime()) {
			if(typeof(callback) == "function") {
				callback(fighterNumbersArray[i]);
			} else {
				console.log("callback is not a function");
				console.log(callback);			
			}
		} else {
			announceTraining(999, fighterArray[fighterNumbersArray[i]].name, fighterArray[fighterNumbersArray[i]].occupied);		
			//console.log(fighterArray[fighterNumbersArray[i]].name + trainsAllready + " " + new Date(fighterArray[fighterNumbersArray[i]].occupied).toUTCString());
		}		
	}
	save();
}

/*
* @param minutes those will be added to the current time
* @return a Date
*/
function addMinutes(minutes) {
	var seconds = (minutes * 60000)
    return (new Date().getTime() + seconds);
}