<?php
	$playerId = $_GET['playerId'];	
	$playerDb = "player";
	$resultArray = array();
	$i = 0;
	$sql="SELECT * FROM `".$playerDb."` WHERE id = '".$playerId."'";
	$connection = mysqli_connect('localhost','root','','bbmdb0.0');
	
	if (!$connection) {
		die('Could not connect: ' . mysqli_error($connection));
	}
	mysqli_select_db($connection,$playerDb);
	if ($result = mysqli_query($connection,$sql)) {
		$resultArray = mysqli_fetch_array($result, MYSQLI_ASSOC);
		mysqli_free_result($result);
	} else {
		die('Could not mysqli_select_db: ' . mysqli_error($connection));		
	}
	echo json_encode($resultArray);
	mysqli_close($connection);
?>