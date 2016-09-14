/*
* uses the name of the player to make an sql request to optain the players id and pw to send it to checkPw(array)
*/
function loadGlobals() {	
			// because of no waiting in js
			loadPlayer(
				function (player) {
					playerGlobal = player; 
					loadFighter(
						player.id, function (fighterArray) {
								fighterArrayGlobal = fighterArray;
							}
					);
				}
			);
			
			// fighters from the player
			buyableFighterGlobal = getGoods();
			// neccesary for gui
			numberOfFightingFighter = 0;
			
			// language changing?_?
			var DrinksSen = "drinks";
			var FinishesSen = "finishes";
			var HisBeerSen = "his beer";
			var ThrowsSen = "throws";
			var MissesSen = "misses";
			var AndHitsSen = "and hits";
			var RealHardSen = "real hard";
			var WinsSen = "wins";
			var teamSen = "Team";
			var thereForHeCannotFightSen = "therefor he cannot fight.";
			var notEnoughMoneyForTheBeerAndStuffSen = "Not enough money for the beer and stuff.";
			var chucksHisBeerSen = "chucks his beer";
			
			/*
			var DrinksSen = "trinkt";
			var FinishesSen = "leert";
			var HisBeerSen = "sein Bier";
			var ThrowsSen = "wirft";
			var MissesSen = "verfehlt";
			var AndHitsSen = "und trifft";
			var RealHardSen = "sehr stark";
			var WinsSen = "gewinnt";
			*/
	
			var notEnoughMoneySen = "Not enough Money to purchase: ";
			var purchasedSen = "Purchased";
			var nameSen = "Name";
			var speedRunSen = "SpeedRun";
			var speedDrinkSen = "SpeedDrink";
			var mouthCapacitySen = "MouthCapacity";
			var strengthArmSen = "StrengthArm";
			var accuracySen = "Accuracy";
			var drinkHoldabilitySen = "DrinkHoldability";
			var priceSen = "Price";
			
			var willSen = "will";
			var runSen = "run";
			var drinkSen = "drink";
			var throwSen = "throw";
			var isBusySen = "is busy";
			var untilSen = "until";
			var trainsAllreadySen = " trains allready!";
			var selectAFighterSen = "Select a fighter.";
}