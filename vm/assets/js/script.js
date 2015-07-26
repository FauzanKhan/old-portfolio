$(document).ready(function() {
	$(document).scroll(function(){
		var scrolled = $(document).scrollTop();
		if(scrolled > 0){
			$('.top-navigation').hide();
			//$('.brand').animate({'height': '50px', 'width': '180px'});
			//$('.brand').css('width', '180px').css('height', '50px');
			$('.navbar').addClass('navbar-fixed-top');
			$('.navbar').removeClass('fadeInDown');
			$('.top-navigation').removeClass('fadeInDown');
		}
		else{
			$('.top-navigation').show();
			//$('.brand').css('width', '240px').css('height', '80px');
			$('.navbar').removeClass('navbar-fixed-top');
			}
	});
	$('.navbar-toggle').click(function(){
			$('.navbar').addClass('navbar-fixed-top');
			$('.navbar').removeClass('fadeInDown');
			$('.top-navigation').removeClass('fadeInDown');
			});
	$('.wp').waypoint(function() {
			$(this).css('visibility', 'visible');
			$(this).addClass('zoomIn');
		}, {
			offset: '90%'
	});
	$('.wpLeft').waypoint(function() {
			$(this).css('visibility', 'visible');
			$(this).addClass('fadeInLeft');
		}, {
			offset: '90%'
	});
	$('.wpRight').waypoint(function() {
			$(this).css('visibility', 'visible');
			$(this).addClass('fadeInRight');
		}, {
			offset: '90%'
	});
});