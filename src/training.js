/*
* 
*/
Game.prototype.train = function() {
	phase = 1;
	
	this.guiTrain();
};

/*
* 
*/
Game.prototype.runTraining = function(fighterNumber) {
	this.fighterArray[fighterNumber].occupied = this.addMinutes(5);
	this.fighterArray[fighterNumber].speedRun = parseInt(this.fighterArray[fighterNumber].speedRun) + 1;
	this.announceTraining(0, this.fighterArray[fighterNumber].name, this.fighterArray[fighterNumber].occupied);			
	//console.log(this.fighterArray[fighterNumber].name + " " + will + " " + run + " " + until + ": " + new Date(this.fighterArray[fighterNumber].occupied).toUTCString());
};

/*
* 
*/
Game.prototype.drinkTraining = function(fighterNumber) {
	this.fighterArray[fighterNumber].occupied = this.addMinutes(5);
	this.fighterArray[fighterNumber].speedDrink = parseInt(this.fighterArray[fighterNumber].speedDrink) + 1;
	this.fighterArray[fighterNumber].drinkHoldability = parseInt(this.fighterArray[fighterNumber].drinkHoldability) + 0.1;
	this.fighterArray[fighterNumber].mouthCapacity = parseInt(this.fighterArray[fighterNumber].mouthCapacity) + 0.1;
	this.announceTraining(1, this.fighterArray[fighterNumber].name, this.fighterArray[fighterNumber].occupied);		
	//console.log(this.fighterArray[fighterNumber].name + " " + will + " " + drink + " " + until + ": " + new Date(this.fighterArray[fighterNumber].occupied).toUTCString());
};

/*
* 
*/
Game.prototype.throwTraining = function(fighterNumber) {
	this.fighterArray[fighterNumber].occupied = this.addMinutes(5);
	this.fighterArray[fighterNumber].strengthArm = parseInt(this.fighterArray[fighterNumber].strengthArm) + 1;
	this.fighterArray[fighterNumber].accuracy = parseInt(this.fighterArray[fighterNumber].accuracy) + 0.5;
	this.announceTraining(2, this.fighterArray[fighterNumber].name, this.fighterArray[fighterNumber].occupied);		
	//console.log(this.fighterArray[fighterNumber].name + " " + will + " " + thro + " " + until + ": " + new Date(this.fighterArray[fighterNumber].occupied).toUTCString());
};

/*
* @param callback specifies which training is done
*/
Game.prototype.checkTime = function(callback) {
	var fighterNumbersArray = this.getCheckedCheckboxesFor("team", undefined);
	var i = 0;
	for(i = 0; i < fighterNumbersArray.length; i++){
	console.log("drinnen");
		if(this.fighterArray[fighterNumbersArray[i]].occupied < new Date().getTime()) {
			if(typeof(callback) == "function") {
				callback(fighterNumbersArray[i]);
			} else {
				console.log("callback is not a function");
				console.log(callback);			
			}
		} else {
			this.announceTraining(999, this.fighterArray[fighterNumbersArray[i]].name, this.fighterArray[fighterNumbersArray[i]].occupied);		
			//console.log(this.fighterArray[fighterNumbersArray[i]].name + trainsAllready + " " + new Date(this.fighterArray[fighterNumbersArray[i]].occupied).toUTCString());
		}		
	}
	save();
};

/*
* @param minutes those will be added to the current time
* @return a Date
*/
Game.prototype.this.addMinutes = function(minutes) {
	var seconds = (minutes * 60000)
    return (new Date().getTime() + seconds);
};