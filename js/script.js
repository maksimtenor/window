// БУРГЕР МЕНЮ
	$(document).ready(function() {
		$(".burger-menu").click(function() {
		$(".stick").toggleClass(function () {
			return $(this).is('.open, .close') ? 'open close' : 'open';
		});
		});
	});
// БУРГЕР МЕНЮ
/* Dynamic top menu positioning
 *
 */

// var num = 200; //number of pixels before modifying styles

// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > num) {
//         $('.header').addClass('fixed');
//     } else {
//         $('.header').removeClass('fixed');
//     }
// });

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO













/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-body-content");
	 let pagination = document.getElementsByClassName("slider-nav--button");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }    
	 $('.slider-nav--button').each(function() {
		$(this).removeClass('slider-active');
	 }) ;
    slides[slideIndex - 1].style.display = "flex"; 
	 pagination[slideIndex - 1].classList.add('slider-active');

}