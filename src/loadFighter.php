<?php
	$playerId = $_GET['playerId'];
	//$playerId = 1;
	$fighterDb = "fighterdb";
	$resultArray[] = array();
	$i = 0;
	$sql="SELECT * FROM `".$fighterDb."` WHERE playerId = '".$playerId."'";
	$connection = mysqli_connect('localhost','root','','bbmdb0.0');
	
	if (!$connection) {
		die('Could not connect: ' . mysqli_error($connection));
	}
	mysqli_select_db($connection,$fighterDb);
	if ($result = mysqli_query($connection,$sql)) {
		while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
				$resultArray[$i] = $row;
				$i++;
			}
		mysqli_free_result($result);
	} else {
		die('Could not mysqli_select_db: ' . mysqli_error($connection));		
	}
	if ($i == 0) {
		$resultArray = array();
	}
	echo json_encode($resultArray);
	mysqli_close($connection);
?>