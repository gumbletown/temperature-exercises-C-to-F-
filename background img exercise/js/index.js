/**


Pseudo code
Input for Celcius temperature - C - is defined as a number
Convert button is clicked 
C number is converted to F with the formula of F = (C *9/5) + 32
C input is changed to the result of F calculation 
Background image of body changes to reflect temperature range in fahrenheit:
Hot: 86F or higher     hot-weather image
Nice: between 50 - 85.99999   nice-weather image
Cold: less than 50   cold-weather image



*/
$(document).ready(function(){


	$("button").click(function() {
  	var c = $("#celcius").val();
	  var cNum = Number(c);
	  var convert = (c * 9/5) + 32;
		
		$(".fahrenheit").html(convert + " °F");

	if(convert > 86){
		$("body").css("background-image", "url('img/hot-weather.jpeg')");
	 };


	if(convert > 50, convert < 85.99999){
		$("body").css("background-image", "url('img/nice-weather.jpeg')");
	 };

	
	if(convert < 49.99999){
		$("body").css("background-image", "url('img/cold-weather.jpeg')");
	 };



    });

	

	
});