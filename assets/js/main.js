
// navbar scroll
let prevScroll = 0;

$(window).on('scroll', function () {
  let currentScroll = $(this).scrollTop();

  if (currentScroll === 0) {
    // 맨 위에서는 항상 보여주기
    $('.navbar').removeClass('navbarHide');
  } else if (currentScroll > prevScroll) {
    // 아래로 스크롤
    $('.navbar').addClass('navbarHide');
    $('.navbar__ghostBtn').removeClass('open');
    $('.navbar__gnb').removeClass('active');
  } else {
    // 위로 스크롤
    $('.navbar').removeClass('navbarHide');
  }

  prevScroll = currentScroll;
});

// navbar ghostBtn
$(document).ready(function () {
  $('.navbar__ghostBtn').click(function () {
    $(this).toggleClass('open');
    $('.navbar__gnb').toggleClass('active');
  })
});


// mainPage slider
$(document).ready(function () {
  $('.sec01__slide').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  });
});

// tab content
$(document).ready(function () {
  const defaultTab = $('.tab-icon.active').attr('data-tab');
  $('#' + defaultTab).show();

  $('.tab-icon').click(function(e) {
  e.preventDefault();

  let current = $(this).attr('data-tab');

  $('.tab-icon').removeClass('active');
  $('.tab-content').hide();

  $(this).addClass('active');
  $('#' + current).fadeIn(500);
  })
});