$(document).ready(function() {
	$("#image_rollovers img").each(function() {
		// get old and new urls
		var oldURL = $(this).attr("src");
		var newURL = $(this).attr("id");
		
		// preload images		
		var rolloverImage = new Image();
		rolloverImage.src = newURL;
		
		// set up event handlers			
		/*$(this).hover(
			function() {
				$(this).attr("src", newURL);
			},
			function() {
				$(this).attr("src", oldURL);
			}
		); // end hover
		*/
		$(this).mouseover(function(){
			$(this).attr("src",newURL);
		});//end function and mouseover 
		$(this).mouseout(function(){
			$(this).attr("src", oldURL);
		});//end function and mouseout
		
	
	}); // end each
}); // end ready