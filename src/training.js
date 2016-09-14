/*
* 
*/
function runTraining(fighter) {
	fighter.occupied = addMinutes(5);
	fighter.speedRun = parseInt(fighter.speedRun) + 1;
	announceTraining(0, fighter.name, fighter.occupied);			
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + run + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
}

/*
* 
*/
function drinkTraining(fighter) {
	fighter.occupied = addMinutes(5);
	fighter.speedDrink = parseInt(fighter.speedDrink) + 1;
	fighter.drinkHoldability = parseInt(fighter.drinkHoldability) + 0.1;
	fighter.mouthCapacity = parseInt(fighter.mouthCapacity) + 0.1;
	announceTraining(1, fighter.name, fighter.occupied);		
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + drink + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());
}

/*
* 
*/
function throwTraining(fighter) {
	fighter.occupied = addMinutes(5);
	fighter.strengthArm = parseInt(fighter.strengthArm) + 1;
	fighter.accuracy = parseInt(fighter.accuracy) + 0.5;
	announceTraining(2, fighter.name, fighter.occupied);		
	//console.log(fighterArray[fighterNumber].name + " " + will + " " + thro + " " + until + ": " + new Date(fighterArray[fighterNumber].occupied).toUTCString());

}

/*
* @param callback specifies which training is done
*/
function checkTime(callback, fighterArray, player) {
	var fighterNumbersArray = getCheckedCheckboxesFor("team", undefined);
	var i = 0;
	for(i = 0; i < fighterNumbersArray.length; i++){
	console.log("drinnen");
		if(fighterArray[fighterNumbersArray[i]].occupied < new Date().getTime()) {
			if(typeof(callback) == "function") {
				callback(fighterArray[fighterNumbersArray[i]]);
			} else {
				console.log("callback is not a function");
				console.log(callback);			
			}
		} else {
			announceTraining(999, fighterArray[fighterNumbersArray[i]].name, fighterArray[fighterNumbersArray[i]].occupied);		
			//console.log(fighterArray[fighterNumbersArray[i]].name + trainsAllready + " " + new Date(fighterArray[fighterNumbersArray[i]].occupied).toUTCString());
		}		
	}
	save(fighterArray, player);
}

/*
* @param minutes those will be added to the current time
* @return a Date
*/
function addMinutes(minutes) {
	var seconds = (minutes * 60000)
    return (new Date().getTime() + seconds);
}