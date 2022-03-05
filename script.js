$(function () {
  $(".th__tab__item").click(function () {
    let dataTabId = $(this).attr("data-tab"),
      content = $('.th__tab__content[data-tab-content="' + dataTabId + '"]');
    $(".th__tab__item.active").removeClass("active");
    $(this).addClass("active");
    $(".th__tab__content").slideUp(200);
    content.slideDown(200);
  });
  $(".about__link__item a[href^='#']").click(function () {
    let anchor = $(this).attr("href");
    $(".about__link__item a.active").removeClass("active");
    $(this).addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(anchor).offset().top,
      },
      600
    );
  });
  $(".th__accordion .th__accordion__item__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .toggleClass("active")
        .siblings(".th__accordion__content")
        .slideUp(250);
      $(this)
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
    } else {
      $(".th__accordion__item__title.active")
        .removeClass("active")
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this)
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(".th__accordion__item__title")
        .siblings(".th__accordion__content")
        .slideUp(250);
      $(this)
        .toggleClass("active")
        .siblings(".th__accordion__content")
        .slideToggle(250);
    }
  });
  $(".service__on__board__accordeon__block__sub__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .toggleClass("active")
        .siblings(".service__on__board__accardeon__item__content")
        .slideUp(250);
      $(this)
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
    } else {
      $(this)
        .closest(".service__on__board__accordeon__block")
        .find(".service__on__board__accordeon__block__sub__title.active")
        .removeClass("active")
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this)
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this)
        .closest(".service__on__board__accordeon__block")
        .find(".service__on__board__accardeon__item__content")
        .slideUp(250);
      $(this)
        .toggleClass("active")
        .siblings(".service__on__board__accardeon__item__content")
        .slideToggle(250);
    }
  });
  $(".photo__gallery__thumb__item").click(function () {
    let $galleryLink = $(this).find("img").attr("src");
    $(this)
      .closest(".cabin__item")
      .find(".photo__gallery__large img")
      .attr("src", $galleryLink);
    $(this)
      .closest(".cabin__item")
      .find(".photo__gallery__large a")
      .attr("href", $galleryLink);
  });
  
  $(".cabin__item__desc__btn__show").click(function () {
    $(this)
      .closest(".cabins__list")
      .find(".cabin__item__full__desc")
      .slideUp(150);
    $(this)
      .closest(".cabins__list")
      .find(".cabin__item__desc__btn__show")
      .show();
    $(this)
      .addClass("active")
      .hide()
      .siblings(".cabin__item__full__desc")
      .slideToggle(150);
  });
  $(".cabin__item__desc__btn__hide").click(function () {
    $(this)
      .closest(".cabin__item")
      .find(".cabin__item__desc__btn__show")
      .removeClass("active")
      .show()
      .siblings(".cabin__item__full__desc")
      .slideToggle(150);
  });
  $(".th__photo__gallery__list").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="slick__prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slick__next"><i class="fa-solid fa-chevron-right"></i></button>',
  });
  $(".photo__gallery__large a.colorbox, .th__photo__gallery__list a.colorbox").colorbox({
    innerHeight: 600,
  });
  $(".th__sale__item").click(function () {
    if (
      $(this).find(".th__sale__item_desc").hasClass("th__sale__item_desc__hide")
    ) {
      $(this)
        .closest(".th__sales__list")
        .find(".th__sale__item_desc")
        .addClass("th__sale__item_desc__hide");
      $(this)
        .find(".th__sale__item_desc")
        .removeClass("th__sale__item_desc__hide");
    } else {
      $(this)
        .find(".th__sale__item_desc")
        .addClass("th__sale__item_desc__hide");
    }
  });
  $(".cruise__year__filter > div").click(function () {
    $(this).closest(".cruise__year__filter").find("div").removeClass("active");
    $(this).toggleClass("active");
  });
  $(".departure__from__dropdown__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this).siblings(".departure__from__dropdown__list").slideToggle();
    } else {
      $(this)
        .addClass("active")
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this).siblings(".departure__from__dropdown__list").slideToggle();
    }
  });
  $(".departure__from__dropdown__list__item").click(function () {
    let $selectedCity = $(this).attr("data-departure-from");

    $(this)
      .closest(".departure__from__dropdown")
      .find(".departure__from__dropdown__title")
      .removeClass("active")
      .find(".fa-chevron-up")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this)
      .closest(".departure__from__dropdown")
      .find(".departure__from__dropdown__title span")
      .text($selectedCity);
    $(this).closest(".departure__from__dropdown__list").slideToggle();
  });

  $(".cruise__list__view__dropdown__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(this).siblings(".cruise__list__view__dropdown__list").slideToggle();
    } else {
      $(this)
        .addClass("active")
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
      $(this).siblings(".cruise__list__view__dropdown__list").slideToggle();
    }
  });
  $(".cruise__list__view__dropdown__list__item").click(function () {
    let $selectedCity = $(this).attr("data-departure-from");

    $(this)
      .closest(".cruise__list__view__dropdown")
      .find(".cruise__list__view__dropdown__title")
      .removeClass("active")
      .find(".fa-chevron-up")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this)
      .closest(".cruise__list__view__dropdown")
      .find(".cruise__list__view__dropdown__title span")
      .text($selectedCity);
    $(this).closest(".cruise__list__view__dropdown__list").slideToggle();
  });
  $(".cruise__list__item__price i").mouseover(function () {
    $(this).find(".item__price__tooltip").toggle();
  });
  $(".cruise__list__item__price i").mouseout(function () {
    $(this).find(".item__price__tooltip").toggle();
  });
});
