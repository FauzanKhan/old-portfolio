// JavaScript Document
	/*----------Shrink the scroll bar on scroll--------------*/

$(window).scroll(function(){
	  if($(document).scrollTop() > 00)
		{
			$('#navigation').stop().animate({height:'40px'},100);
			$('.navbar-brand').css({"padding":"0px"},100);
			$('#navigation-list li').css({"padding-top":"0px"},100)
		
	}
	else
	  {	
			$('#navigation').stop().animate({height:'75px'},100);
			$('.navbar-brand').css({"padding":"10px 0px 7px 20px"},100);
			$('#navigation-list li').css({"padding-top":"15px"},100)
		  }  
	  
	});
	$(document).ready(function(){
			$('.carousel').carousel({interval: 3200});
			$('.search-form .form-control').focus(function(){$(this).css({"background":"white"},1500)});
			$('.search-form .form-control').blur(function(){$(this).css({"background":"rgba(200,200,200,.2)"},1500)});
			
			$('#reg-form input').focus(function(){$(this).css({"background":"white"},1500)});
			$('#reg-form input').blur(function(){$(this).css({"background":"rgba(225,225,225,.9)"},1500)});
			
	/*------panel slider----*/
			
		  $('#slides1').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		
		 $('#slides2').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		   $('#slides3').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		   $('#slides4').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		   $('#slides5').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		   $('#slides6').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		  
		   $('#slides7').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		  
		   $('#slides8').slidesjs({
			width: 940,
			height: 528,
			navigation: false,
			start: 3,
			play: {
			  auto: true
			}
		  });
		  
		  
		  
		  
		  
		   $('.slider1').bxSlider({
    slideWidth: 283,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 10
  });
		  
		  
		});