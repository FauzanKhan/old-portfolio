// JavaScript Document
$(document).ready(function() {
	$(".subbutton").mouseenter(function(){
		/*$(this).animate({ width:"250px",height:"80px" }, 200);
		$(this).css('border-radius','20px');
		$(this).css('font-size','30px')
	});
	$(".subbutton").mouseleave(function(){
		$(this).animate({height:"45px" , width:"150px" }, 200);
		$(this).css('border-radius','10px');
		$(this).css('font-size','20px');*/
		 $(this).effect("bounce", { times:3 }, 200);
	});

})