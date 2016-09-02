/*
* uses the name to make an sql request to optain the pw
* and the id of the player
*/
function loadPlayerId() {	
	var xmlhttp = new XMLHttpRequest();
	var playerName = document.getElementById("playerName").value;
	var playerPw = "" + document.getElementById("playerPw").value;
	
	xmlhttp.onload = function() {
		checkPw(xmlhttp.responseText);
	};
	xmlhttp.open("GET", "src/loadPlayerId.php?playerName=" + playerName, true);
	xmlhttp.send();
}

/*
* uses the name to make an sql request to optain the pw
* and the id of the player
*/
function loadPlayer() {	
	var xmlhttp = new XMLHttpRequest();
	var playerId = readCockie("playerId");
	
	xmlhttp.onload = function() {
		player = JSON.parse(xmlhttp.responseText);
		loadTopHUD();
		loadFighter(); 
		getGoods();
	};
	xmlhttp.open("GET", "loadPlayer.php?playerId=" + playerId, true);
	xmlhttp.send();
}

/*
* checks wether the pw for the form matches the pw form the db
* @param responsePw, the pw from the db as json
* @param callback, should be loadFighter
*/
function checkPw(responsePw) {
		console.log(responsePw);
		var result = JSON.parse(responsePw);
		
		if (result.pw == playerPw.value) {	
			document.cookie = "playerId=" + result.id;
			window.location.assign("src/game.html");
		} else {
			alert("Wrong Password or wrong Username.");
		}
}


