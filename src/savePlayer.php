<?php
	$id = $_GET["id"];	
	$money = $_GET["money"];	
	$beerId = $_GET["beerId"];	
	
	$connection = mysqli_connect('localhost','root','','bbmdb0.0');
	// escape variables for security
	//$name = mysqli_real_escape_string($connection, $_POST['name']);
	
	$playerDb = "player";
	$sql = ("UPDATE ".$playerDb." SET money=".$money.", beerId=".$beerId." WHERE id=".$id);
	
	if (!$connection) {
		die('Could not connect: ' . mysqli_error($connection));
	}
	mysqli_select_db($connection,$playerDb);
	if ($connection->query($sql) === TRUE) {
    echo "Update successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $connection->error;
	}
	mysqli_close($connection);
?>