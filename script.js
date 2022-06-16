$(function () {
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
  $(document).mouseup(function (e) {
    //элементы скрытия
    let cabinTypes = $(".cabin__type__card__slide__content"); // тут указываем ID элемента
    let cruiseFilterDropdown = $(".ship__depature__dropdown__active");
    // элементы скрытия

    // если клик был не по нашему блоку
    // скрываем его
    if (!cabinTypes.is(e.target) && cabinTypes.has(e.target).length === 0) {
      $(".cabin__type__card__slide__title").removeClass("active");
      cabinTypes.slideUp(100);
    }
    if (
      !cruiseFilterDropdown.is(e.target) &&
      cruiseFilterDropdown.has(e.target).length === 0
    ) {
      $(".ship__depature__list").removeClass("active");
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
    } else {
      $(".ship__cruise__list").hide();
      $(".ship__cruise__card").show();
      $(".ship__cruises").removeClass("list__view").addClass("card__view");
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
  });
});
