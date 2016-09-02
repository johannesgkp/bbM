/*
* uses the id of the player to make an sql request to optain the fighters from the db
* @param playerId, id of the player
*/
function loadFighter() {	
	var playerId = readCockie("playerId");
	var xmlhttp = new XMLHttpRequest();
	fighterArray = new Array;
	
	xmlhttp.onload = function() {
		var fA = JSON.parse(xmlhttp.responseText);
		var i = 0;
		for(i = 0; i < fA.length; i++){
			fighterArray[i] = new OldFighter(fA[i]);
		}
	};
	xmlhttp.open("GET", "loadFighter.php?playerId=" + playerId, true);
	xmlhttp.send();
}

/*
* uses the id of the player to make an sql request to optain the fighters from the db
* @param playerId, id of the player
*/
function readCockie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

