//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append sliders.js
//@prepros-append jq-end.js

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

//<IBG>============================================================================================

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

//</IBG>===========================================================================================




$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1500,
		easing: 'ease',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchMove: true,
		waitForAnimate: true,
		centerMode: true,     //Центрирование
		variableWidth: true,    //вариативная ширина
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		responsive: [
			{
				breakpoint: 1060,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.slidersmall').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 1500,
		easing: 'ease',
		infinite: false,
		initialSlide: 1,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: true,     //Центрирование
		variableWidth: true,    //вариативная ширина
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		responsive: [
			{
				breakpoint: 1060,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

