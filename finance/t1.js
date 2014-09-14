
var print = function(stuff){
	console.log(stuff);
}

var annuityhelp = function(){
	print("annuity(Cash, rate, time)");
}

var annuity = function(cash, rate, time){
	var output = (cash/rate)*(1-(1/Math.pow(1+rate, time)));
	print(output);
}

var growAnnuity = function(cash, rate, growth, time){ // checked, works
	var output = (cash/(rate-growth))*(1-Math.pow((1+growth)/(1+rate), time));
	print(output);
}

$(document).ready(function(){
	$("#growAnnuityAnswer").innerHTML = "hello";
});
