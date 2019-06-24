$(".medin-desc").animatext({
	speed: 100,
	effect: 'flipInX',
	infinite: true
});
$(document).ready(function() {
	$('#fullpage').fullpage({
		//		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ef820'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		afterLoad: function(anchorLink, index) {
			if(index == 1) {
				$('.page-one').find('.animate-banner').delay(500).css({
					bottom: '0',
					left: '44%',
					opacity: '1'
				});
			}
			if(index == 2) {
				$('.page-two').find('.animate-left').delay(500).css({
					left: '0',
					opacity: '1'
				});
				$('.page-two').find('.animate-center').css({
					'transform': 'scale(1)',
					'-ms-transform': 'scale(1)',
					'-webkit-transform': 'scale(1)',
				});
				$('.page-two').find('.animate-right').delay(500).css({
					right: '0',
					opacity: '1'
				});

			}
			if(index == 3) {
				$('.page-three').find('.animate-a').delay(500).removeClass('animate-b');
				$('.page-three').find('.animate-c').delay(500).removeClass('animate-d');
			}
			if(index == 4) {
				$('.page-four').find('.service-inner').slideDown("slow");
			}
		},
		onLeave: function(index, direction) {
			if(index == 1) {
				$('.page-one').find('.animate-banner').delay(500).css({
					bottom: '100%',
					left: '100%',
					opacity: '0'
				});
			}
			if(index == 2) {
				$('.page-two').find('.animate-left').delay(500).css({
					left: '-50%',
					opacity: '0'
				});
				$('.page-two').find('.animate-center').delay(500).css({
					'transform': 'scale(0)',
					'-ms-transform': 'scale(0)',
					'-webkit-transform': 'scale(0)',
				});
				$('.page-two').find('.animate-right').delay(500).css({
					right: '-50%',
					opacity: '0'
				});
			}
			if(index == 3) {
				$('.page-three').find('.animate-a').delay(500).addClass('animate-b');
				$('.page-three').find('.animate-c').delay(500).addClass('animate-d');
			}
			if(index == 4) {
				$('.page-four').find('.service-inner').slideUp("slow");
			}

		}
	});

});