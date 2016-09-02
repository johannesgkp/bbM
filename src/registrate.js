/*
* load
*/
function registrate() {
	var xmlhttp = new XMLHttpRequest();
	var playerName = document.getElementById("playerName").value;
	var playerPw = "" + document.getElementById("playerPw").value;
	
	xmlhttp.onload = function() {
		//loadPlayer();
	};
	xmlhttp.open("GET", "registratePlayer.php?playerName=" + playerName + "&playerPw=" + playerPw, true);
	xmlhttp.send();
}


