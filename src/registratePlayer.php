<?php
	//$playerName = $_GET["playerName"];	
	//$playerPw = $_GET["playerPw"];	
	$playerName = "foo";	
	$playerPw = "bar";	
	$playerDb = "player";
	
	$connection = mysqli_connect('localhost','root','','bbmdb0.0');

	// escape variables for security
	$playerName = mysqli_real_escape_string($connection, $_POST['playerName']);
	$playerPw = mysqli_real_escape_string($connection, $_POST['playerPw']);
	
	$i = 0;
	$sql = ("INSERT INTO ".$playerDb." (name, pw, money, beerId) VALUES ('".$playerName."', '".$playerPw."', '"."230"."', '"."0"."')");

	
	if (!$connection) {
		die('Could not connect: ' . mysqli_error($connection));
	}
	mysqli_select_db($connection,$playerDb);
	//echo json_encode($resultArray);
	if ($connection->query($sql) === TRUE) {
    echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $connection->error;
	}
	mysqli_close($connection);
?>