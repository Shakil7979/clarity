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

	// $(document).ready(function () {
	// 	$(".menu_item").hover(
	// 		function () {
	// 			$(".mega_menu").css("left", "0"); // Slide in from the left
	// 		},
	// 		function () {
	// 			$(".mega_menu").css("left", "-100%"); // Hide to the left
	// 		}
	// 	);
	// });
	
	





});