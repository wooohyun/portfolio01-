$(function () {
    $('.main_visual .main_slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });

    $('.main_menu .m_menu').click(function () {
        $('.main_menu .m_menu').toggleClass('on')
        $('.main_menu .s_menu').removeClass('on');
    });

    $('.main_menu .s_menu').click(function () {
        $('.main_menu .s_menu').toggleClass('on');
        $('.main_menu .m_menu').removeClass('on');
    });

    $('ul.top_banner li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.top_banner li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

    AOS.init();
})