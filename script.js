$(function () {
  $(".th__tab__item").click(function () {
    let dataTabId = $(this).attr("data-tab"),
      content = $('.th__tab__content[data-tab-content="' + dataTabId + '"]');
    // let anchor = $(this).find("a").attr("href");

    $(".th__tab__item.active").removeClass("active");
    $(this).addClass("active");
    $(".th__tab__content").hide();
    content.show();
    // $("html, body").animate(
    //   {
    //     scrollTop: $(anchor).offset().top,
    //   },
    //   100
    // );
  });
  $(".service__on__board__accordeon__block__title").click(function () {
    // $(".service__on__board__accardeon__items").slideToggle();
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .siblings(".service__on__board__accardeon__items")
        .slideUp();
      $(this)
        .find(".fa-chevron-up")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
    } else {
      $(this)
        .addClass("active")
        .siblings(".service__on__board__accardeon__items")
        .slideDown();
      $(this)
        .find(".fa-chevron-down")
        .removeClass("fa-chevron-down")
        .addClass("fa-chevron-up");
    }
  });
  // $(".about__link__item a[href^='#']").click(function () {
  //   let anchor = $(this).attr("href");
  //   $(".about__link__item.active").removeClass("active");
  //   $(this).closest(".about__link__item").addClass("active");
  //   $("html, body").animate(
  //     {
  //       scrollTop: $(anchor).offset().top - 340,
  //     },
  //     600
  //   );
  // });
  $(".th__on__board__item img").mouseover(function () {
    $(this).siblings(".th__on__board__item__tooltip").show();
  });
  $(".th__on__board__item img").mouseout(function () {
    $(this).siblings(".th__on__board__item__tooltip").hide();
  });
  $(".cabin__item__facilities__icons__item img").mouseover(function () {
    $(this).siblings(".cabin__item__facilities__icons__item__tooltip").show();
  });
  $(".cabin__item__facilities__icons__item img").mouseout(function () {
    $(this).siblings(".cabin__item__facilities__icons__item__tooltip").hide();
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
      .hide(1);
    $(this)
      .closest(".cabins__list")
      .find(".cabin__item__desc__btn__show")
      .show();
    $(this)
      .addClass("active")
      .hide()
      .siblings(".cabin__item__full__desc")
      .show();
  });
  // $(".cabin__item__desc__btn__hide").click(function () {
  //   $(this)
  //     .closest(".cabin__item")
  //     .find(".cabin__item__desc__btn__show")
  //     .removeClass("active")
  //     .show()
  //     .siblings(".cabin__item__full__desc")
  //     .slideToggle(150);
  // });
  $(".cabin__item__full__desc").click(function () {
    $(this)
      .closest(".cabin__item")
      .find(".cabin__item__desc__btn__show")
      .removeClass("active")
      .show()
      .siblings(".cabin__item__full__desc")
      .slideToggle(0);
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
    responsive: [
      {
        breakpoint: 940,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".infoflot__recomedation__cruises__list").slick({
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
    responsive: [
      {
        breakpoint: 940,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  // $(
  //   ".photo__gallery__large a.colorbox, .th__photo__gallery__list a.colorbox"
  // ).colorbox({
  //   innerHeight: 600,
  // });
  // $(".th__sale__item").click(function () {
  //   if (
  //     $(this).find(".th__sale__item_desc").hasClass("th__sale__item_desc__hide")
  //   ) {
  //     $(this)
  //       .closest(".th__sales__list")
  //       .find(".th__sale__item_desc")
  //       .addClass("th__sale__item_desc__hide");
  //     $(this)
  //       .find(".th__sale__item_desc")
  //       .removeClass("th__sale__item_desc__hide");
  //   } else {
  //     $(this)
  //       .find(".th__sale__item_desc")
  //       .addClass("th__sale__item_desc__hide");
  //   }
  // });
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
    let $selectedView = $(this).attr("data-type-title");
    let $selectedViewType = $(this).attr("data-type-view");

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
      .text($selectedView);
    $(this).closest(".cruise__list__view__dropdown__list").slideToggle();
    $(this).closest(".th__cruises__block").find(".cruise__list").show();
    if ($selectedViewType == "grid") {
      $(this)
        .closest(".th__cruises__block")
        .find('div[data-type-view-block="grid"]')
        .show();
      $(this)
        .closest(".th__cruises__block")
        .find('div[data-type-view-block="list"]')
        .hide();
    } else if ($selectedViewType == "list") {
      $(this)
        .closest(".th__cruises__block")
        .find('div[data-type-view-block="list"]')
        .show();
      $(this)
        .closest(".th__cruises__block")
        .find('div[data-type-view-block="grid"]')
        .hide();
    }
  });
  $(".cruise__list__item__price i").mouseover(function () {
    $(this).find(".item__price__tooltip").toggle();
  });
  $(".cruise__list__item__price i").mouseout(function () {
    $(this).find(".item__price__tooltip").toggle();
  });
  $(".cabin__filter .bi-plus-circle").click(function () {
    let $currentValue = +$(this).siblings(".count").text();
    if ($currentValue > 0) {
      $currentValue += 1;
      $(this).siblings(".count").text($currentValue);
    }
  });
  $(".cabin__filter .bi-dash-circle").click(function () {
    let $currentValue = +$(this).siblings(".count").text();
    if ($currentValue > 0) {
      $currentValue -= 1;
      $(this).siblings(".count").text($currentValue);
    }
  });
  $(".th__burger__menu").click(function () {
    $(".th__left__menu").animate({ width: "toggle" });
  });
  $(".th__burger__menu__clone").click(function () {
    $(".th__left__menu__clone").animate({ width: "toggle" });
  });
  $(".cruise__list.list_view .cruise__list__item__share img").click(
    function () {
      $(this).closest(".cruise__list__item__share").toggleClass("active");
      $(this).siblings(".cruise__list__item__share__social").slideToggle(150);
    }
  );
  $(".cruise__list.grid_view .cruise__list__item__sales img").mouseover(
    function () {
      $(this).siblings(".cruise__list__item__sales__tooltip").toggle();
    }
  );
  $(".cruise__list.grid_view .cruise__list__item__sales img").mouseout(
    function () {
      $(this).siblings(".cruise__list__item__sales__tooltip").toggle();
    }
  );
  let scrollSection = $(".th__section, .cruise__section"),
    thAboutLinks = $(".th__anchor__scroll__group"),
    thAboutTabs = $(".th__tabs"),
    thAboutLinksHeight = thAboutLinks.outerHeight();

  $(window).on("scroll", function () {
    let cur_pos = $(this).scrollTop();
    let scrollwindow = $(this).scrollTop();
    scrollSection.each(function () {
      let top = $(this).offset().top - 345,
        bottom = top + $(this).outerHeight();
      let anchorsTopOffset = thAboutTabs.offset().top - 137;
      if (cur_pos >= top && cur_pos <= bottom) {
        thAboutLinks.find(".th__anchor__scroll").removeClass("active");
        scrollSection.removeClass("active");

        $(this).closest(".th__anchor__scroll").addClass("active");
        thAboutLinks
          .find('a[href="#' + $(this).attr("id") + '"]')
          .closest(".th__anchor__scroll")
          .addClass("active");
      }
      if (scrollwindow >= anchorsTopOffset) {
        // console.log("test");
        $(".th__tab__item").css({ padding: "10px" });
        $(".th__about__links").css({ padding: "10px 0" });
        $(".th__burger__menu__clone").show();
        if ($(window).width() > 1136) {
          $(".th__about__links").css({ top: "200px" });
        } else if ($(window).width() > 588) {
          $(".th__about__links").css({ top: "244px" });
        } else if ($(window).width() < 589) {
          $(".th__about__links").css({ top: "265px" });
        }
      } else {
        $(".th__tab__item").css({ padding: "20px" });
        $(".th__about__links").css({ padding: "30px 0" });
        $(".th__burger__menu__clone").hide();
        $(".th__left__menu__clone").hide();
      }
    });
  });
  thAboutLinks.find("a").on("click", function () {
    let $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - 340,
      },
      500
    );

    return false;
  });
  $("body").click(function (e) {
    let $menu = $(".th__left__menu"),
      $target = $(e.target);
    if (
      !$menu.find($target).length &&
      !$(".th__burger__menu").find($target).length
    ) {
      $menu.hide(200);
    }
  });
});
