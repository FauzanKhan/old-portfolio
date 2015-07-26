$(document).ready(function(){
	$(".submit").mouseenter(function(){
		$(this).stop().animate({ width:"250px",height:"80px" }, 200);
		$(this).css('border-radius','20px');
		$(this).css('font-size','30px')
	});
	$(".submit").mouseleave(function(){
		$(this).stop().animate({height:"45px" , width:"150px" }, 200);
		$(this).css('border-radius','10px');
		$(this).css('font-size','20px');

	});
	$("#fb").mouseenter(function(){
		$(this).stop().animate({ width:"50px",height:"50px", padding:"5px" }, 200);
		$(this).css('font-size','27px');
	});
	$("#fb").mouseleave(function(){
		$(this).stop().animate({height:"30px" , width:"40px", padding:"3px" }, 200);
		$(this).css('font-size','20px');
	});
	$("#tw").mouseenter(function(){
		$(this).stop().animate({ width:"50px",height:"50px", padding:"5px" }, 200);
		$(this).css('font-size','27px');
	});
	$("#tw").mouseleave(function(){
		$(this).stop().animate({height:"30px" , width:"40px", padding:"3px" }, 200);
		$(this).css('font-size','20px');
	});
	$("#sign").mouseenter(function(){
		$(this).stop().animate({ width:"180px" }, 200);
	});
	$("#sign").mouseleave(function(){
		$(this).stop().animate({width:"90px" }, 200);
	});
	$("#log").mouseenter(function(){
		$(this).stop().animate({ width:"180px" }, 200);
	});
	$("#log").mouseleave(function(){
		$(this).stop().animate({width:"90px" }, 200);
	});
	$("#information").hide().fadeIn('slow','swing');
	$("#cinfo").hide().fadeIn('slow','swing');
	/*--------------------????????---------------------------*/
	/*$('input').one('focus', function(){
    this.value = '';
	});
	$('.fname').blur(function(){
		if(this.value==''){
			this.value='First Name'
		}
	});
	$('.lname').blur(function(){
		if(this.value==''){
			this.value='Last Name'
		}
	});
	$('.mail').blur(function(){
		if(this.value==''){
			this.value='Your Email'
		}
	});
	$('.pass').blur(function(){
		if(this.value==''){
			this.value='Password'
		}
	});*/
	/*---------------------?????????--------------------------*/
	/*$(".pass").click(function(){
		$(this).prop('type','password');	
	});
	$('.name').click(function(){
		$(this).css('color','black');	
	});
	$('.mail').click(function(){
		$(this).css('color','black');
	});
	$('.pass').click(function(){
		$(this).css('color','black');
	});*/

});