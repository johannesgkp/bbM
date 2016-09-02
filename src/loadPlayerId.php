<?php
	$playerName = $_GET['playerName'];	
	//$playerName = "flow";	
	$playerDb = "player";
	$resultArray = array();
	$sql="SELECT pw, id FROM `".$playerDb."` WHERE name = '".$playerName."'";
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