$(document).ready(function() {
	// add span element after each input element
	$(":text").after("<span></span>");
	
	// move focus to first text box
	$("#doo").focus();
	
	// the handler for the click event of a add button
	$("#add").click(
		function(event) {
			var task = $("#doo").val().trim();
			if (task){ //Will evaluate to true if task is not an empty string
				$("#doo").next().text("");
				//add the users input to the list
				$("#list").append(function(){
					
             	return "<li><div>" + task + "<input type='checkbox'  /><label> </label></div></li>";
    			});
    	   }else{
    	   	$("#doo").next().text("This field is required.");
    	   }
    //cleat the text box
    $("#doo").val("");	   
								
			
	} // end function
	);	// end click
	//the handler for the click fo remove button
	$("#RemoveButton").click(function(){
    $('#list').children().children().children("input[checked='checked']").parent().parent().remove();
}); 
	
}); // end ready