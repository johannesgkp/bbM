/*
* uses the name of the player to make an sql request to optain the players id and pw to send it to checkPw(array)
*/
function loadPlayerId() {	
	var xmlhttp = new XMLHttpRequest();
	var playerName = document.getElementById("playerName").value;
	var playerPw = document.getElementById("playerPw").value;
	
	xmlhttp.onload = function() {
		checkPw(xmlhttp.responseText);
	};
	xmlhttp.open("GET", "src/loadPlayerId.php?playerName=" + playerName, true);
	xmlhttp.send();
}

/*
* uses the id of the player from a cookie to make an sql request to optain the player array to send it to checkPw(array)
*/
function loadPlayer() {	
	var xmlhttp = new XMLHttpRequest();
	var playerId = readCockie("playerId");
	
	xmlhttp.onload = function() {
		player = JSON.parse(xmlhttp.responseText);
		// announce name and money from the player
		loadTopHUD();
		loadFighter(); 
		// fill the buyableFighterArray
		getGoods();
	};
	xmlhttp.open("GET", "loadPlayer.php?playerId=" + playerId, true);
	xmlhttp.send();
}

/*
* checks wether the pw from the html page matches the pw from the db
* @param responsePw, array with the pw from the db as json
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


