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
	$id = $_GET["id"];	
	$value = $_GET["value"];
	
	$connection = mysqli_connect('localhost','root','','bbmdb0.0');
	// escape variables for security
	//$name = mysqli_real_escape_string($connection, $_POST["name"]);
	
	$fighterDb = "fighterdb";
	$sql = ("UPDATE ".$fighterDb." SET speedRun=".$speedRun.", speedDrink=".$speedDrink.", mouthCapacity=".$mouthCapacity.", strengthArm=".$strengthArm.", accuracy=".$accuracy.", luck=".$luck.", drinkHoldability=".$drinkHoldability.", influence=".$influence.", occupied=".$occupied.", value=".$value." WHERE id=".$id);
	
	if (!$connection) {
		die('Could not connect: ' . mysqli_error($connection));
	}
	mysqli_select_db($connection,$fighterDb);
	if ($connection->query($sql) === TRUE) {
    echo "Update successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $connection->error;
	}
	mysqli_close($connection);
?>