/* ==============================================
	Page Preloader
=============================================== */
$(window).load(function() { 
	$("#loader").delay(500).fadeOut(); 
	$(".mask").delay(1000).fadeOut("slow");
});




/* Start Ready Function */
jQuery(document).ready(function ($) { 

'use strict';

/* ==============================================
    variable screen height
=============================================== */ 

 
/* ==============================================
    Contact Form
=============================================== */
$(function () {
    $("#contact .submit-button").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#text").val();
        var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
        if (name == '') {
            $('#name').css({
                'background-color': '#FAFFBD'
            });
        } else {
            if (email == '') {
                $('#email').css({
                    'background-color': '#FAFFBD'
                });
            } else {
                if (text == '') {
                    $('#text').css({
                        'background-color':'#FAFFBD'
                        
                    });
                    
                } else {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: dataString,
                        success: function () {
                            $('#form-sent').fadeIn(1000);
                        }
                    });
                }
            }
        }
        return false;
    });
});
/* ==============================================
	Video Player
=============================================== */	
$(function(){
    $(".player").mb_YTPlayer();
  });

});
/* end ready function */
/* ==============================================
	img Hover
=============================================== */	

$('#one').mouseover(function() {

    // increase the 500 to larger values to lengthen the duration of the fadeout 
       // and/or fadein
    $('#one').fadeOut(500, function() {
        $('#one').attr("src","img/derboy.png");
        $('#one').fadeIn(500);
    });

});

$('#one').mouseout(function() {

    // increase the 500 to larger values to lengthen the duration of the fadeout 
       // and/or fadein
    $('#one').fadeOut(500, function() {
        $('#one').attr("src","img/portrait-sample.gif");
        $('#one').fadeIn(500);
    });

});

// NAVIGATION SLIDE IN EFFECT
    
var header = $('.noBackground');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			//header.removeClass('noBackground').addClass('blackBackground').fadeIn("slow");
            $('header').slideDown(300).addClass('blackBackground');
		} else {
			//header.removeClass('blackBackground').fadeOut("slow").addClass('noBackground');
            $('header').slideUp(300);
	   }
    });


/* ==============================================
  PROJECTS SECTION
=============================================== */
	
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				//onMixEnd: filterList.hoverEffect()
			});				
		
		},
		
		hoverEffect: function () {
		
			// Simple parallax effect
			$('#portfoliolist .portfolio').hover(
				function () {
					$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
					$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
				},
				function () {
					$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
					$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
				}		
			);				
		
		}

	};
	
	// Run the show!
	filterList.init();	



    



/* ==============================================
  Parallax Sections
=============================================== */
( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
    parallaxInit();             
  });
  function parallaxInit() {
    testMobile = isMobile.any();
    if (testMobile == null)
    {
  $('.responsive-parallax').parallax("50%", 0.4);
    }
  } 
  parallaxInit();  
}); 
//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {     
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));