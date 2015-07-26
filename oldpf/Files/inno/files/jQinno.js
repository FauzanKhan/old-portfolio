// JavaScript Document
$(document).ready(function(){
	$('#rightplain').animate({ width:"56.7em"}, 400);
	$('#leftplain').animate({ width:"10em"}, 400);
	$('#fb').mouseenter(function(){
			$('#likeus').stop().animate({ width:"180px"}, 300);
			$('#likeus').css('visibility','visible');
		})
	$('#fb').mouseleave(function(){
			$('#likeus').stop().animate({ width:"0px"}, 300);
			$('#likeus').css('visibility','hidden');
		})
	$('#tw').mouseenter(function(){
			$('#followus').stop().animate({ width:"180px"}, 300);
			$('#followus').css('visibility','visible');
		})
	$('#tw').mouseleave(function(){
			$('#followus').stop().animate({ width:"0px"}, 300);
			$('#followus').css('visibility','hidden');
		})	
	$('#in').mouseenter(function(){
			$('#findus').stop().animate({ width:"180px"}, 300);
			$('#findus').css('visibility','visible');
		})
	$('#in').mouseleave(function(){
			$('#findus').stop().animate({ width:"0px"}, 300);
			$('#findus').css('visibility','hidden');
		})
 	$('#otherevnts').stop().mouseenter(function(){
			$('#eventslink').css('visibility','visible');
		})
	$('#welcome').stop().fadeIn('slow', function() {  
            $(this).fadeTo("slow", .8);  
        });  
	$('.eventbox').stop().fadeIn('slow', function() {  
            $(this).fadeTo("slow",1);  
        });  
			
	});