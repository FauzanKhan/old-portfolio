
$(document).ready(function(){
	$('.windowSpan').css('opacity', 0);
		$(window).load(function() {
		  $('.windowSpan').css('opacity', 1);
		});
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var nameFlag = false;
	var emailFlag = true;
	var messageFlag = false;
	$('[rel="tooltip"]').tooltip();
	$('.windowSpan').css('height', windowHeight+'px').css('width', windowWidth+'px');
	if(windowWidth < 386){
		//$('.windowSpan').css('height', '1000px');
		$('.aboutWrapper').css('height', '1700px');
	}
	else if(windowWidth < 520){
		$('.aboutWrapper').css('height', '1200px');
	}
	else if(windowWidth < 840){
		//$('.windowSpan').css('height', '650px');
		$('.aboutWrapper').css('height', '1000px');
	}
	else if(windowWidth < 1227){
		$('.aboutWrapper').css('height', '700px');	
	}
	
	if(windowHeight < 500){
		$('.windowSpan').css('height', '1000px');
	}
	else if(windowHeight < 600){
		$('.windowSpan').css('height', '700px');
	}
	
	$('.toTop a').hide();
	
	$(window).resize(function(){
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		$('.itemInfo, .itemWrapper').height($('.itemImg').height());
		$('.itemInfo, .itemWrapper').width($('.itemImg').width());	
		$('.windowSpan').css('height', windowHeight+'px').css('width', windowWidth+'px');
		if(windowHeight < 600){
			$('.aboutWrapper').css('height', '1500px');
			$('.windowSpan').css('height', '700px');
		}
		if(windowWidth < 386){
			$('.aboutWrapper').css('height', '1500px');
		}
		else if(windowWidth < 520){
			$('.aboutWrapper').css('height', '1200px');
		}
		else if(windowWidth < 840){
			//$('.windowSpan').css('height', '650px');
			$('.aboutWrapper').css('height', '1000px');
		}
		else if(windowWidth < 1227){
			$('.aboutWrapper').css('height', '700px');	
		}
	});
	
	$("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});
	
	$('.introImgWrapper').hover(function(){
		$('.slogan-left').addClass('customAnim');
		$('.thatsMe').addClass('thatsMeAnim');
		},function(){
			$('.slogan-left').removeClass('customAnim');
			$('.thatsMe').removeClass('thatsMeAnim');
	});
	
	$('.itemInfo, .itemWrapper').height($('.itemImg').height());
	$('.itemInfo, .itemWrapper').width($('.itemImg').width());	
	
	$(document).scroll(function(){
		var scrollTop = $(document).scrollTop();		
		if(scrollTop > 150){
			$('.navbar-brand, .navbar-nav').addClass('blackBg');
			$('.toTop a').fadeIn(900);
			}
		else{
			$('.navbar-brand, .navbar-nav').removeClass('blackBg');
			$('.toTop a').fadeOut(900);
			}
		});
		setTimeout(function(){
			$('.slogan-left').removeClass('animated, fadeInDown');
			$('.slogan-right').removeClass('animated, fadeInUp');
		}, 2000);
		
		$('.wp1').waypoint(function() {
			$(this).addClass('animated rotateIn');
			$(this).css('visibility', 'visible');
		}, {
			offset: '90%'
		});
	
	$('.wp2').waypoint(function() {
		$(this).addClass('animated_hinge fadeInLeft');
		$(this).css('visibility', 'visible');
	}, {
		offset: '100%'
	});
	
	$('.wp3').waypoint(function() {
		$(this).addClass('animated_hinge fadeInRight');
		$(this).css('visibility', 'visible');
	}, {
		offset: '100%'
	});
	
	$('.html').waypoint(function() {
		$(this).addClass('level4  levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.css').waypoint(function() {
		$(this).addClass('level5 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.javascipt').waypoint(function() {
		$(this).addClass('level3 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.jquery').waypoint(function() {
		$(this).addClass('level4 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.java').waypoint(function() {
		$(this).addClass('level3 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.c').waypoint(function() {
		$(this).addClass('level2 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.ruby').waypoint(function() {
		$(this).addClass('level1 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.bootstrap').waypoint(function() {
		$(this).addClass('level3 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	$('.creativity').waypoint(function() {
		$(this).addClass('level5 levelAnim');
		$(this).css('visibility', 'visible');
	}, {
		offset: '60%'
	});
	
	/*$('.wp4').waypoint(function() {
		$(this).addClass('animated_hinge fadeInRight');
		$(this).css('visibility', 'visible');
	}, {
		offset: '30%'
	});*/
	
	function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
	/*/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i*/
};
	
	$('.mail').on('keyup blur', function(){
		if(!isValidEmailAddress($(this).val())){
			$(this).attr('rel', 'tooltip');
			$(this).attr('data-original-title', 'That\'s not a valid email address');
			$(this).attr('data-placement', 'bottom');
			$(this).css('border-color', 'rgb(140,0,0)');
			emailFlag = false;
			disableSubmitButton();	
			$('[rel="tooltip"]').tooltip();
		}
		else{
			emailFlag = true;
			$(this).removeAttr('rel');
			$(this).removeAttr('data-original-title');
			$(this).css('border-color', '#99c936');
			enableSubmitButton();
		}
		$(this).val($(this).val().trim()); 		
	});
	
	
	$('.name:nth-child(1)').on('blur keyup', function(){
		if($(this).val().trim() === "" ){
			$(this).attr('rel', 'tooltip');
			$(this).attr('data-original-title', 'So, what do I call You?');
			$(this).css('border-color', 'rgb(180,0,0)');
			nameFlag = false;
			disableSubmitButton();	
			$('[rel="tooltip"]').tooltip();
		}
		else{
			nameFlag = true;
			$(this).removeAttr('rel');
			$(this).removeAttr('data-original-title');
			$(this).css('border-color', '#99c936');
			enableSubmitButton();
		}
	});
	
	$('.message').on('keyup blur', function(){
		if($(this).val().trim() === "" ){
			$(this).attr('rel', 'tooltip');
			$(this).attr('data-original-title', 'Why are you contacting me again?');
			$(this).attr('data-placement', 'bottom');
			$(this).css('border-color', 'rgb(140,0,0)');
			messageFlag = false;
			disableSubmitButton();	
			$('[rel="tooltip"]').tooltip();
		}
		else{
			messageFlag = true;
			$(this).removeAttr('rel');
			$(this).removeAttr('data-original-title');
			$(this).css('border-color', '#99c936');
			enableSubmitButton();
		} 		
	});
	
	var disableSubmitButton = function(){
		var submitBtn = '.formButton:nth-child(1)';
		$(submitBtn).attr('disabled', true);
		$(submitBtn).css('opacity', '.4');
	}
	
	var enableSubmitButton = function(){
		if(nameFlag && emailFlag && messageFlag){
			var submitBtn = '.formButton:nth-child(1)';
			$(submitBtn).removeAttr('disabled');
			$(submitBtn).css('opacity', '1');
		}
	}
	
	$('.formButton[type="reset"]').click(function(){
			disableSubmitButton();
		});
	disableSubmitButton(); 
 	/*$('nav ul li a').click(function(){
		$('.navbar-brand, .navbar-nav').css('background', 'rgba(0,0,0,0.0)');
	});
	*/
		$('.navbar-nav li a').click(function(){
			if($('.navbar-toggle').is(':visible'))
				$('.navbar-toggle').click();
		});

});