$(function () {
  let inputDate = $("#depature--date,#arrival--date").datepicker({
    dateFormat: "dd.mm.yy",
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  });
  let defaultDate = new Date(),
    arrivalDate = defaultDate.getFullYear + 1;
  $("#depature--date,#arrival--date").val(
    $.datepicker.formatDate("dd.mm.yy", defaultDate)
  );
  // $("#arrival--date").val($.datepicker.formatDate("dd.mm.yy", arrivalDate));
  let scrollSection = $(".ship__section"),
    shipAnchors = $(".anchors__group");
  $(window).on("scroll", function () {
    inputDate.datepicker("hide");
    let cur_pos = $(this).scrollTop();
    scrollSection.each(function () {
      let top = $(this).offset().top - 222,
        bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        shipAnchors.removeClass("active");
        $('.anchors__group[href="#' + $(this).attr("id") + '"]').addClass(
          "active"
        );
      }
    });
  });
  $(".ship__anchors__bottom a, .ship__anchors__top a").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top - 202 }, 400);
  });
  $(document).mouseup(function (e) {
    //элементы скрытия
    // тут указываем ID элемента
    let officesList = $(".list__offices");
    let officesBtn = $(".offices__btn");

    let headerNav = $(".header__slide");
    let headerItem = $(".header__item");

    let cruiseCategoriesBlockCard = $(".cruise__categories__block");
    let cruiseFilterDropdown = $(".ship__depature__dropdown__active");
    let filterBtn = $(".filter__item__block");
    let filterSelect = $(".dropdown__select");
    // элементы скрытия

    // если клик был не по нашему блоку или не по кнопке открывающей его
    // скрываем его
    if (
      !filterBtn.is(e.target) &&
      filterBtn.has(e.target).length === 0 &&
      !filterSelect.is(e.target) &&
      filterSelect.has(e.target).length === 0
    ) {
      filterSelect.slideUp(100);
    }
    if (
      !officesList.is(e.target) &&
      officesList.has(e.target).length === 0 &&
      !officesBtn.is(e.target) &&
      officesBtn.has(e.target).length === 0
    ) {
      officesBtn.removeClass("active");
    }
    if (
      !headerNav.is(e.target) &&
      headerNav.has(e.target).length === 0 &&
      !headerItem.is(e.target) &&
      headerItem.has(e.target).length === 0
    ) {
      $(".header__item").removeClass("active");
      headerNav.slideUp(100);
    }
    if (
      !cruiseCategoriesBlockCard.is(e.target) &&
      cruiseCategoriesBlockCard.has(e.target).length === 0
    ) {
      $(".cruise__categories__bg").fadeOut(100);
      cruiseCategoriesBlockCard.fadeOut(100);
      $(".ship__cruise__card .slide__cabin__prices").removeClass("active");
      $("body").css("overflow", "auto").css("padding-right", "0");
    }
    // if (!cabinTypes.is(e.target) && cabinTypes.has(e.target).length === 0) {
    //   $(".slide__cabin__prices.active").removeClass("active");
    //   $(".cabin__type__card__slide__title").removeClass("active");
    //   cabinTypes.slideUp(100);
    //   $("body").css("overflow", "auto").css("padding-right", "0");
    // }
    if (
      !cruiseFilterDropdown.is(e.target) &&
      cruiseFilterDropdown.has(e.target).length === 0
    ) {
      $(".ship__depature__list").removeClass("active");
    }
  });
  $(".ship__services__tabs div").first().addClass("active");
  updateServicetab();
  function updateServicetab(params) {
    $(".ship__services__tabs div.active").each(function () {
      let id = $(this).attr("service-tab");
      $(".ship__services__content").hide();
      $('.ship__services__content[service-content="' + id + '"]').show();
    });
  }
  $(".ship__services__tabs div").click(function () {
    $(".ship__services__tabs div").removeClass("active");
    $(this).addClass("active");
    updateServicetab();
  });
  $(".ship__gallery").slick({
    lazyLoad: "ondemand",
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slick__prev" src="/images/ship__gallery__arrow_l.png">',
    nextArrow:
      '<img class="slick__next" src="/images/ship__gallery__arrow_r.png">',
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
  $(".cabin__type__card__smallimgs").slick({
    lazyLoad: "ondemand",
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<img class="slick__prev" src="/images/slick__arrow__left.png">',
    nextArrow:
      '<img class="slick__next" src="/images/slick__arrow__right.png">',
  });
  $(".ship__recommendations").slick({
    lazyLoad: "ondemand",
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slick__prev" src="/images/ship__gallery__arrow_l.png">',
    nextArrow:
      '<img class="slick__next" src="/images/ship__gallery__arrow_r.png">',
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
  $(".cabin__type__card__slide__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .siblings(".cabin__type__card__slide__content")
        .slideUp(100);
    } else {
      $(".cabin__type__card__slide__title")
        .removeClass("active")
        .siblings(".cabin__type__card__slide__content")
        .slideUp(100);
      $(this)
        .addClass("active")
        .siblings(".cabin__type__card__slide__content")
        .slideDown(100);
    }
  });

  $(".cabin__types__pag").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .html(
          'Показать все&nbsp;<img width="14" src="/images/chevron__down__blue.png" alt="">'
        )
        .removeClass("active");
      $(".ship__cabin__type__card:nth-child(n + 7)").slideUp(100);
    } else {
      $(this)
        .html(
          'Скрыть&nbsp;<img width="14" src="/images/chevron__up__blue.png" alt="">'
        )
        .addClass("active");
      $(".ship__cabin__type__card:nth-child(n + 7)").slideDown(100);
    }
  });
  $(".ship__sales__pag").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .html(
          'Больше акций&nbsp;<img width="14" src="/images/chevron__down__blue.png" alt="">'
        )
        .removeClass("active");
      $(".ship__sale__el:nth-child(n + 4)").slideUp(100);
    } else {
      $(this)
        .html(
          'Скрыть&nbsp;<img width="14" src="/images/chevron__up__blue.png" alt="">'
        )
        .addClass("active");
      $(".ship__sale__el:nth-child(n + 4)")
        .slideDown(100)
        .css("display", "flex");
    }
  });
  $(".ship__depature__dropdown__active").click(function () {
    $(this).closest(".ship__depature__list").toggleClass("active");
  });
  function ActiveCruiseView() {
    let activeView = $(".cruise__type__view__active").attr("data-active-view");
    if (activeView == "list") {
      $(".ship__cruise__card").hide();
      $(".ship__cruise__list").css("display", "flex");
      $(".ship__cruises").removeClass("card__view").addClass("list__view");
      $(".ship__cruise__list.cruise__el__pag").css("display", "none");
    } else {
      $(".ship__cruise__list").hide();
      $(".ship__cruise__card").show();
      $(".ship__cruises").removeClass("list__view").addClass("card__view");
      $(".ship__cruise__card.cruise__el__pag").css("display", "none");
    }
  }
  ActiveCruiseView();
  $(".cruise__type__view__list li").click(function () {
    let SelectedType = $(this).attr("data-type-view");
    $(".cruise__type__view__list li").show();
    $(this).hide();
    $(".cruise__type__view__active")
      .attr("data-active-view", SelectedType)
      .text($(this).text());
    ActiveCruiseView();
    $(".ship__cruises__pag")
      .removeClass("active")
      .html(
        'Больше круизов&nbsp;<img width="14" src="/images/chevron__down__blue.png" alt="">'
      );
  });
  $(".login__modal__btn").click(function () {
    $(".login__modal").fadeIn();
    return false;
  });
  $(".ship__cruises__pag").click(function () {
    let SelectedView = $(".cruise__type__view__active").attr(
      "data-active-view"
    );
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .html(
          'Больше круизов&nbsp;<img width="14" src="/images/chevron__down__blue.png" alt="">'
        );
      $(".cruise__el__pag").slideUp(100);
    } else {
      $(this)
        .html(
          'Скрыть&nbsp;<img width="14" src="/images/chevron__up__blue.png" alt="">'
        )
        .addClass("active");
      if (SelectedView == "list") {
        $(".ship__cruise__list.cruise__el__pag")
          .slideDown(100)
          .css("display", "flex");
      } else {
        $(".ship__cruise__card.cruise__el__pag").slideDown(100);
      }
    }
  });

  $(".login__modal__close").click(function () {
    $(this).parents(".login__modal").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".login__modal").fadeOut();
    }
  });

  $(".login__modal").click(function (e) {
    if ($(e.target).closest(".login__modal__content").length == 0) {
      $(this).fadeOut();
    }
  });
  $(".ship__cruise__list .slide__cabin__prices").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this)
        .closest(".ship__cruise__list")
        .find(".bottom__block")
        .slideDown(200)
        .css("display", "flex");
    } else {
      $(this)
        .closest(".ship__cruise__list")
        .find(".bottom__block")
        .slideUp(200);
    }
  });
  $(".ship__cruise__card .slide__cabin__prices").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .closest(".ship__cruise__card")
        .find(".cruise__categories__block")
        .fadeOut(200);
      $(this).removeClass("active");
      $(".cruise__categories__bg").hide();
      $("body").css("overflow", "auto").css("padding-right", "0");
    } else {
      $(".ship__cruise__card .slide__cabin__prices").removeClass("active");
      $(".cruise__categories__block").fadeOut(200);
      $(this)
        .addClass("active")
        .closest(".ship__cruise__card")
        .find(".cruise__categories__block")
        .fadeIn(200)
        .css("display", "flex");
      $(".cruise__categories__bg").show();
      $("body").css("overflow", "hidden").css("padding-right", "15px");
    }
  });
  $(".cruise__categories__close").click(function () {
    $(".ship__cruise__card .slide__cabin__prices").removeClass("active");
    $(this)
      .closest(".ship__cruise__card")
      .find(".cruise__categories__block")
      .fadeOut(200);
    $(".cruise__categories__bg").first().hide();
    $("body").css("overflow", "auto").css("padding-right", "0");
  });
  $(".header__item[header-nav]").click(function () {
    let headerNavAttr = $(this).attr("header-nav");
    if ($(this).hasClass("active")) {
      $(".header__slide").slideUp(100);
      $(".header__item").removeClass("active");
    } else {
      $(".header__item").removeClass("active");
      $(this).addClass("active");
      $(".header__slide").slideUp(100);
      $('.header__slide[header-nav="' + headerNavAttr + '"]')
        .slideDown(100)
        .css("display", "flex");
    }
  });
  $(".header__slide .tab__btn").click(function () {
    let headerTabAttr = $(this).attr("header-tab");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header__slide .tab__content").slideUp(100);
    } else {
      $(".header__slide .tab__btn").removeClass("active");
      $(this).addClass("active");
      $(".header__slide .tab__content").slideUp(100);
      $(
        '.header__slide .tab__content[header-tab="' + headerTabAttr + '"]'
      ).slideDown(100);
      if (headerTabAttr == "other-russian-cruises") {
        $(
          '.header__slide .tab__content[header-tab="' + headerTabAttr + '"]'
        ).css("display", "grid");
      } else {
        $(
          '.header__slide .tab__content[header-tab="' + headerTabAttr + '"]'
        ).css("display", "flex");
      }
    }
  });

  $(".offices__btn").click(function () {
    $(this).toggleClass("active");
  });
  $(".filter__item__block").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").siblings(".dropdown__select").slideUp(100);
    } else {
      $(".filter__item__block")
        .removeClass("active")
        .siblings(".dropdown__select")
        .slideUp(100);
      $(this).addClass("active").siblings(".dropdown__select").slideDown(100);
    }
  });
  function updateCurrentValueSelect(dropDownSelect, currentClickCheck) {
    if (dropDownSelect.find(":checkbox:checked").length > 1) {
      dropDownSelect
        .siblings(".filter__item__block")
        .find(".filter__current__value")
        .text("Выбрано " + dropDownSelect.find(":checkbox:checked").length);
    } else if (dropDownSelect.find(":checkbox:checked").length == 1) {
      dropDownSelect
        .siblings(".filter__item__block")
        .find(".filter__current__value")
        .text(
          dropDownSelect.find(":checkbox:checked").siblings("label").text()
        );
    } else {
      dropDownSelect
        .siblings(".filter__item__block")
        .find(".filter__current__value")
        .text("Любой");
    }
  }
  $(".custom__checkbox").click(function () {
    updateCurrentValueSelect(
      $(this).closest(".dropdown__select"),
      $(this).find("label")
    );
  });
  $(".custom__radiobtn").click(function () {
    $(".days__count .filter__current__value").text(
      $(this).find("label").text()
    );
  });
});
