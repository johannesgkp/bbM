/*
* shows the fighter of the player in the annoucnment table
*/
function info() {  
	insultsTest();
}

function insultsTest() {  
	var dummy = getFighter();
	console.log("insults:");
	console.log(dummy.insults[0][1]);
	console.log(dummy.insults[1][1]);
	console.log(dummy.insults[2][1]);
	console.log(dummy.insults[3][1]);
	console.log("nervousness:")
	console.log(dummy.nervousness[0][1]);
	console.log(dummy.nervousness[1][1]);
	console.log(dummy.nervousness[2][1]);
	console.log(dummy.nervousness[3][1]);
}


function fighterTestDrink() {  
	var result = 0;
	var dummy = getFighter();
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
	//fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack 
	var result = 0;
	var dummy = getFighter();
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
	//fieldLength, strengthNeededToHitBottle, accuracyNeededToHitBottle, accuracyNeededToBounceBack 
	var result = new Array();
	var dummy = getFighter();
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