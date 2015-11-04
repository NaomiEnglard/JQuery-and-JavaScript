$(document).ready(function() {
	$("#email").focus();
	
	$("#email_form").validate({
		rules: {
			email_1: {
				required: true,
				email: true
			},
			email_2:{
				required: true,
				email:true,
				equalsTo: "#email_1"
			},
			first_name:{
				required: true
			},
			last_name:{
				required: true
				
			},
			state:{
				required: true,
				rangelength:[2,2]
			},
			zip:{
				required: true,
				rangelength:[5,5],
				digits: true
			}
		},
		messages:{
			email_2:{
				equalsTo: "this entry must equal previous enetry"
			},
			state:{
				rangelength: "please enter a 2-character state code"
			},
			zip:{
				rangelength: "please enter a 5-character zip code"
			}
		}
		
			
	});//end validation
	
}); // end ready
