$(document).ready(function() {
	$("#join_list").click(
		function() {
			var emailAddress1 = $("#email_address1").val();
			var emailAddress2 = $("#email_address2").val();
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 == "") { 
				$("#email_address1_error").text("This field is required.");
				isValid = false;
			} else {
				$("#email_address1_error").text("");
			} 
			
			// validate the second email address
			if (emailAddress2 == "") { 
				$("#email_address2_error").text("This field is required.");
				isValid = false; 
			} else if (emailAddress1 !== emailAddress2) { 
				$("#email_address2_error").text("This entry must equal first entry.");
				isValid = false;
			} else {
				$("#email_address2_error").text("");
			}
			
			// validate the first name entry  
			if ($("#first_name").val() == "") {
				$("#first_name_error").text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name_error").text("");
			}
			
			// submit the form if all entries are valid
			if (isValid) {
				$("#email_form").submit(); 
			}
		} // end function
	);	// end click
	
	
	$("#clear_entries").click(function(){
		$(":text").val(""); //clear all enteries 
		$(":text").next().text("*");//clear all error messages
		$("#email_address1").focus();
		
		}//end function
	); //end on click clear
	$("#email_form input").dblclick(function(){
		//$("#clear_entries").click(); //clear all entries as if click clear button
		$(this).val("");
	});//end function and double click
	
}); // end ready
