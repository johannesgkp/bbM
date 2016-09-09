/*
* shows the fighter of the player in the annoucnment table
*/
function info() {   
	var i = 0;
	
	clearTable();
	firstLine();
	for(i = 0; i < fighterArray.length; i++) {
		announceArrayOfFighterRadioButton(fighterArray, i);
	}
}