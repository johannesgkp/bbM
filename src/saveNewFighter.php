<?php
	$name = $_GET["name"];	
	$speedRun = $_GET["speedRun"];
	$speedDrink = $_GET["speedDrink"];
	$mouthCapacity = $_GET["mouthCapacity"];
	$strengthArm = $_GET["strengthArm"];
	$accuracy = $_GET["accuracy"];
	$luck = $_GET["luck"]; 
	$drinkHoldability = $_GET["drinkHoldability"];
	$influence = $_GET["influence"];
	$occupied = $_GET["occupied"];
	$playerId = $_GET["playerId"];
	$value = $_GET["value"];	
	
	$connection = mysqli_connect('localhost','root','','bbmdb0.0');
	// escape variables for security
	//$name = mysqli_real_escape_string($connection, $_POST['name']);
	
	$fighterDb = "fighterdb";
	$sql = ("INSERT INTO ".$fighterDb." (name, speedRun, speedDrink, mouthCapacity, strengthArm, accuracy, luck, drinkHoldability, influence, occupied, playerId, value) VALUES ('".$name."', '".$speedRun."', '".$speedDrink."', '".$mouthCapacity."', '".$strengthArm."', '".$accuracy."', '".$luck."', '".$drinkHoldability."', '".$influence."', '".$occupied."', '".$playerId."', '".$value."')");
	
	if (!$connection) {
		die('Could not connect: ' . mysqli_error($connection));
	}
	mysqli_select_db($connection,$fighterDb);
	if ($connection->query($sql) === TRUE) {
    echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $connection->error;
	}
	mysqli_close($connection);
?>