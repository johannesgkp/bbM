/*
* uses the id of the player to make an sql request to optain the fighters from the db
*/
function loadFighter(playerId, callback) {	
	var xmlhttp = new XMLHttpRequest();
	// loadFighter might be used after fighterArray is allready filled so i need to clear it first
	fighterArray = new Array;
	
	xmlhttp.onload = function() {
		var fA = JSON.parse(xmlhttp.responseText);
		var fighterArray = new Array();
		for(var i = 0; i < fA.length; i++){
			// to construct fighters from ther dbValues i use the OldFighter constructor
			fighterArray[i] = new OldFighter(fA[i]);
		}
		if(typeof(callback) == "function") {
			callback(fighterArray);
		}
	};
	xmlhttp.open("GET", "loadFighter.php?playerId=" + playerId, true);
	xmlhttp.send();
}

/*
* @param cname, name of the cockie
* @return cookie value at cname
*/
function readCockie(cname) {
    var name = cname + "=";
    var cookieArray = document.cookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

