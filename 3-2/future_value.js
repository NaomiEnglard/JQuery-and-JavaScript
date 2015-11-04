var $ = function (id) {
    return document.getElementById(id);
}
//when user clicks calculate button the function will go
var calculateClick = function () {
	//read in variables and convert to decimal or integer
    var investment = parseFloat($("investment").value);
    var annualRate = parseFloat($("rate").value);
    var years = parseInt($("years").value);
	//validate enteries
	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number greater than zero.");
	} 
	else if(isNaN(annualRate) || annualRate <= 0) {
		alert("Annual rate must be a valid number greater than zero.");
	}
	else if(isNaN(years) || years <= 0) {
		alert("Years must be a valid number\nand greater than zero.");
	}
	// if all of the enteries are valid continue with the rest of the code
	else {
		var futureValue = investment;
		//calculate futureValue
		for ( i = 1; i <= years; i++ ) {
			futureValue += futureValue * annualRate / 100;
		}
		//remove decimal of futureValue and put future value in text box
		$("future_value").value = futureValue.toFixed();
	} 
}
window.onload = function () {
//when click calculate button it should calculate
	$("calculate").onclick= calculateClick;
//focus
    $("investment").focus();
}
