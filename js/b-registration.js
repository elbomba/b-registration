var mail=false;
var pass1=false;
var pass2=false;

//controllo mail registration
function checkMailRegistration() {
	var espressione= /^[_a-z0-9+-]+(\.[_a-z0-9+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
	var mail=document.forms["registration"]["mail"].value;
	if (mail=="") {
		$("input#mail").removeClass("ui-state-error");
		$("label#mail").removeClass("ui-state-error-text");
	} else {
		if (!espressione.test(mail)){
			$("input#mail").addClass("ui-state-error");
			$("label#mail").addClass("ui-state-error-text");
			mail=false;
		} else {
			$("input#mail").removeClass("ui-state-error");
			$("label#mail").removeClass("ui-state-error-text");
			mail=true;
		}
	}
}

//controllo password registration
function checkPasswdRegistration() {
	var esppass= /^([a-zA-Z0-9])+$/;
	var passwd=document.forms["registration"]["passwd"].value;
	if(passwd=="") {
		$("input#passwd").removeClass("ui-state-error");
		$("label#passwd").removeClass("ui-state-error-text");
	} else {
		if(!esppass.test(passwd)) {
			$("input#passwd").addClass("ui-state-error");
			$("label#passwd").addClass("ui-state-error-text");
			pass1=false;
		} else {
			$("input#passwd").removeClass("ui-state-error");
			$("label#passwd").removeClass("ui-state-error-text");
			pass1=true;
		}
	}
}

//controllo password check registration
function checkPasswdCheckRegistration() {
	var esppass= /^([a-zA-Z0-9])+$/;
	var passwd=document.forms["registration"]["checkpasswd"].value;
	if(passwd=="") {
		$("input#checkpasswd").removeClass("ui-state-error");
		$("label#checkpasswd").removeClass("ui-state-error-text");
	} else {
		if(!esppass.test(passwd)) {
			$("input#checkpasswd").addClass("ui-state-error");
			$("label#checkpasswd").addClass("ui-state-error-text");
			pass2=false;
		} else {
			$("input#checkpasswd").removeClass("ui-state-error");
			$("label#checkpasswd").removeClass("ui-state-error-text");
			pass2=true;
		}
	}
}

//Valida il form di registration
function validateRegistration() {
	var mail=document.forms["registration"]["mail"].value;
	var password=document.forms["registration"]["passwd"].value;
	var checkpassword=document.forms["registration"]["checkpasswd"].value;
	if ((!pass1) || (!pass2) || (!mail)) {
		alert("Mail o Password non inserite correttamente!");
	} else {
		if (password != checkpassword) {
			alert("Le due password non corrispondono!");
		} else {
			//Edit the follow line to make it work
			$.post("./php/registrationCheck.php", {mail: mail, password: password}, function(result){
				$("html").html(result);
			});
		}
	}
}