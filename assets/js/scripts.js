$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	$('.top_header_carousel').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
	});

	$(".header_area").hover(
        function() {
            $(this).addClass("add_header");
        },
        function() {
            $(this).removeClass("add_header");
        }
    );
 


	$(".menu_item").hover(
		function () {
			$(".mega_menu").hide(); // Hide all mega menus first
			$(this).find(".mega_menu").stop(true, true).fadeIn(300); // Show only hovered li's mega menu
			$(this).find("i").css({'opacity':'1','visibility':'visible'}); // Show icon on hover
		},
		function () {
			$(this).find(".mega_menu").stop(true, true).fadeOut(300); // Hide mega menu when not hovering
			$(this).find("i").css({'opacity':'0','visibility':'hidden'}); // Hide icon when not hovering
		}
	); 
	
	
	





});