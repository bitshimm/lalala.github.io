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
  $(".cabin__type__card__smallimgs").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slick__prev" src="/images/slick__arrow__left.png">',
    nextArrow:
      '<img class="slick__next" src="/images/slick__arrow__right.png">',
  });
  $(".cabin__type__card__slide__title").click(function () {
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .siblings(".cabin__type__card__slide__content")
        .hide(100);
    } else {
      $(".cabin__type__card__slide__title")
        .removeClass("active")
        .siblings(".cabin__type__card__slide__content")
        .hide(100);
      $(this)
        .addClass("active")
        .siblings(".cabin__type__card__slide__content")
        .show(100);
    }
  });
});
