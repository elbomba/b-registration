<?php
	session_start();

	require("./mysql.php");
	
	$mail = $_POST["mail"];
	$passwd = $_POST["password"];
	
	//Verifica utente non esistente
	//Query to edit for different kind of database
	$subquery=mysql_fetch_array(mysql_query("select E_mail from Utente where E_mail='$mail'"));
	if($subquery[0]==$mail){
		echo("Nome utente già esistente!");
		break;
	}

	//Inserimento nuovo utente
	//Query to edit for different kind of database
	$ins=mysql_query("insert into Utente(E_mail, Password) value ('$mail', '$passwd')")
	or die("Errore nella registrazione del nuovo utente");

	echo("Utente creato con successo!");
	
	mysql_close($conn);
?>