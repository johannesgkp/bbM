/*
* 
*/
function info() {   
	var i = 0;
	
	clearTable();
	firstLine();
	for(i = 0; i < fighterArray.length; i++){
		announceArrayOfFighter(fighterArray, i);
	}
}