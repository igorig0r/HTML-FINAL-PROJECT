$(document).ready(function(){

	document.body.style.overflow = 'hidden';
	$("#one").click(function() {	
    	$(".container").hide();
		$(".portfolio").fadeIn();
	 });

	$("#two").click(function() {	
    	$(".container").hide();
		$(".usluge").fadeIn();
	 });

	$("#three").click(function() {	
    	$(".container").hide();
		$(".portfolio").fadeIn();
	 });

	$("#four").click(function() {	
    	$(".container").hide();
		$(".about").fadeIn();
	 });

	$("#five").click(function() {	
    	$(".container").hide();
		$(".contact").fadeIn();
	 });


 
     // ARROW

	$(".arrow1").click(function() {  	
    	$(".container").fadeIn();
		$(".home").hide();
	 });

	$(".arrow2").click(function() {  	
    	$(".container").fadeIn();
		$(".usluge").hide();
	 });

	$(".arrow3").click(function() {  	
    	$(".container").fadeIn();
		$(".portfolio").hide();
	 });

	$(".arrow4").click(function() {  	
    	$(".container").fadeIn();
		$(".about").hide();
	 });

	$(".arrow5").click(function() {  	
    	$(".container").fadeIn();
		$(".contact").hide();
	 });
	
 });




