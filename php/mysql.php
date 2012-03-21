<?php
	// Here you must insert the properties of your database.
	$host="localhost";
	$user="root";
	$passwd="root";
	$db="Test";

	$connnect=mysql_connect($host, $user, $passwd)
	or die("Impossibile contattare il server");
	$db_select=mysql_select_db($db)
	or die("Impossibile contattare il database");
?>