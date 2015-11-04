(function($){
	$.fn.reveal = function() {
		return this.each(function() {
			$(this).next().hide();
			$(this).toggle(
			function() {
				$(this).toggleClass("minus");
		    	$(this).next().slideDown(1000);
	    	},
	    	function() {
	        	$(this).toggleClass("minus");
	        	$(this).next().slideUp(1000);
	    	}
    	);      
		});	
	}
})(jQuery);
