"use strict";

$(function () {
  $('.button__arrow-down').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#scrollto').offset().top
    }, 1000);
    e.preventDefault();
  });
});
$(".our-princip__wrappper").sticky({
  topSpacing: 50,
  bottomSpacing: 2600
});
$('.main-post__subcards').slick({
  responsive: [{
    breakpoint: 2048,
    settings: "unslick"
  }, {
    breakpoint: 1115,
    settings: {
      arrows: true,
      prevArrow: '<button id="prev" type="button" class="slick__prev-arrow  arrow__slide"> <img src="img/arrright.png" alt="asdd">   </button>',
      nextArrow: '<button type="button" class="slick__next-arrow  arrow__slide"> <img src="img/arrright.png" alt="asdd"> </button>',
      dots: true,
      slidesToShow: 2
    }
  }, {
    breakpoint: 600,
    settings: {
      arrows: true,
      prevArrow: '<button id="prev" type="button" class="slick__prev-arrow  arrow__slide"> <img src="img/arrright.png" alt="asdd">   </button>',
      nextArrow: '<button type="button" class="slick__next-arrow arrow__slide "> <img src="img/arrright.png" alt="asdd"> </button>',
      dots: true,
      slidesToShow: 1
    }
  }]
});
var burger = document.querySelector('#nav-icon4');
var burgerMenu = document.querySelector('.burger__menu');
var boodyy = document.body;
burger.addEventListener('click', function () {
  burger.classList.toggle('open');
  burgerMenu.classList.toggle('burger__menu-active');
  boodyy.classList.toggle('lock');
});
var growsTab = document.querySelectorAll('.faq-tabs__item');
var growsTabsItems = document.querySelectorAll('.faq-tabs__item-content');
growsTab.forEach(function (e) {
  e.addEventListener('click', function () {
    var currentBtn = e;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);
    growsTab.forEach(function (item) {
      item.classList.remove('faq-tabs__item-content-active');
    });
    growsTabsItems.forEach(function (item) {
      item.classList.remove('faq-tabs__item-content-active');
    });
    currentBtn.classList.add('faq-tabs__item-content-active');
    currentTab.classList.add('faq-tabs__item-content-active');
  });
});
$(function () {
  var filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();
    $(this).addClass('news-tabs__item-active');
    var cat = $(this).data('filter');

    if (cat === 'all') {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        var workCat = $(this).data('cat');

        if (workCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
  });
});
var newsTab = document.querySelectorAll('.news-tabs__item');
newsTab.forEach(function (e) {
  e.addEventListener('click', function () {
    newsTab.forEach(function (item) {
      item.classList.remove('news-tabs__item-active');
    });
  });
});
var accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);

function change(event) {
  var targ = event.target;
  if (targ.tagName !== 'H3') return;

  if (targ.classList.contains('select')) {
    hideAll();
  } else {
    hideAll();
    targ.classList.add('select');
    showText(targ.nextElementSibling);
  }
}

function hideAll() {
  var h3El = accordion.querySelectorAll('h3');
  var divEl = accordion.querySelectorAll('div');

  for (var i = 0; i < h3El.length; i++) {
    h3El[i].classList.remove('select');
  }

  for (var i = 0; i < divEl.length; i++) {
    divEl[i].style.height = '0';
  }
}

function showText(textEl) {
  textEl.style.height = textEl.scrollHeight + 'px';
}
"use strict";

console.log('maxgraph');
"use strict";
//# sourceMappingURL=main.js.map
