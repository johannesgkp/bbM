/*
* saves a new player (name and pw) to the db
*/
Game.prototype.registrate = function() {
	var xmlhttp = new XMLHttpRequest();
	var playerName = document.getElementById("playerName").value;
	var playerPw = "" + document.getElementById("playerPw").value;
	
	xmlhttp.onload = function() {
		//this.loadPlayer();
	};
	xmlhttp.open("GET", "src/registratePlayer.php?playerName=" + playerName + "&playerPw=" + playerPw, true);
	xmlhttp.send();
};