$(function () {
    $('.main_visual .main_slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_menu .m_menu').click(function () {
        $('.main_menu .m_menu').toggleClass('on')
        $('.main_menu .s_menu').removeClass('on');
    });

    $('.main_menu .s_menu').click(function () {
        $('.main_menu .s_menu').toggleClass('on');
        $('.main_menu .m_menu').addClass('on');
    });

    $('ul.top_banner li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.top_banner li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    AOS.init();
});

function hello()  {
    alert('미완성입니다');
  }

  var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}











// 반응형
if (matchMedia("screen and (max-width: 768px)").matches) {
    $('.main_visual .main_slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_menu .m_menu').click(function () {
        $('.main_menu .m_menu').toggleClass('on')
        $('.main_menu .s_menu').removeClass('on');
    });

    $('.main_menu .s_menu').click(function () {
        $('.main_menu .s_menu').toggleClass('on');
        $('.main_menu .m_menu').addClass('on');
    });

    $('ul.top_banner li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.top_banner li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })


    function hello()  {
        alert('미완성입니다');
      }
    
      var target = document.querySelectorAll('.btn_open');
    var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
    var targetID;
    
    // 팝업 열기
    for(var i = 0; i < target.length; i++){
      target[i].addEventListener('click', function(){
        targetID = this.getAttribute('href');
        document.querySelector(targetID).style.display = 'block';
      });
    }
    
    // 팝업 닫기
    for(var j = 0; j < target.length; j++){
      btnPopClose[j].addEventListener('click', function(){
        this.parentNode.parentNode.style.display = 'none';
      });
    }
}