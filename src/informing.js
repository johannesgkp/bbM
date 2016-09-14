/*
* shows the fighter of the player in the annoucnment table
*/
function info() {  
	console.log(playerGlobal);
	console.log(fighterArrayGlobal);
	console.log(numberOfFightingFighter);
}

/*
function fighterTestDrink() {  
var result = 0;
var dummy = new Fighter(90, 20, 15, 10, 23, 5, 60, 15, 33, 15, 8, 6, 3, 4, 20);
	for(var i = 0; i < 100; i++) {
		result += dummy.drinkingTest((3 + Math.random()));
	}
	result /= 100;
	
	console.log("speedDrink");
	console.log(dummy.speedDrink);
	console.log("mouthCapacity");
	console.log(dummy.mouthCapacity);
	console.log("result");
	console.log(result);
}


function fighterTestCatch() {  
var result = 0;
var dummy = new Fighter(90, 20, 15, 10, 23, 5, 60, 15, 33, 15, 8, 6, 3, 4, 20);
	for(var i = 0; i < 100; i++) {
		result += dummy.catchingTest(165);
		//result += dummy.resetBottle(165);
	}
	result /= 100;
	
	console.log("speedRun");
	console.log(dummy.speedRun);
	console.log("result");
	console.log(result);
}


function fighterTestThrow() {  
var result = new Array();
var dummy = new Fighter(90, 20, 15, 10, 23, 5, 60, 15, 33, 15, 8, 6, 3, 4, 20);
var durchschnitt = [0,0,0];
	for(var i = 0; i < 100; i++) {
		result = dummy.throwingTest(330, 15, 0.26, 0.8);
		durchschnitt[0] += result[0];
		durchschnitt[1] += result[1];
		durchschnitt[2] += result[2];
	}
		durchschnitt[0] /= 100;
		durchschnitt[1] /= 100;
		durchschnitt[2] /= 100;
	
	console.log("accuracy");
	console.log(dummy.accuracy);
	console.log("strengthArm");
	console.log(dummy.strengthArm);
	console.log("accu");
	console.log(durchschnitt[1]);
	console.log("strength");
	console.log(durchschnitt[2]);
	console.log("result");
	console.log(durchschnitt[0]);
}
*/