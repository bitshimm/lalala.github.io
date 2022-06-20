jQuery(function ($) {
  $(".js-filter select").change(function () {
    var rangeFilter = {
      capacity: $("#capacity")
        .val()
        .split("-")
        .map(function (v) {
          return parseInt(v);
        }),
      price: $("#price")
        .val()
        .split("-")
        .map(function (v) {
          return parseInt(v);
        }),
    };

    $(".car_rental_item")
      .show()
      .each(function () {
        if (
          ($("#deck").val() && $(this).attr("data-deck") != $("#deck").val()) ||
          $(this).attr("data-capacity") < rangeFilter.capacity[0] ||
          $(this).attr("data-capacity") > rangeFilter.capacity[1] ||
          $(this).attr("data-price") < rangeFilter.price[0] ||
          $(this).attr("data-price") > rangeFilter.price[1]
        ) {
          $(this).hide();
        }
      });

    setTimeout(function () {
      if ($(".car_rental_item:visible").length > 0) {
        $(".js-notFound").text("");
      } else {
        $(".js-notFound").text("Теплоходов с такими параметрами не найдено");
      }
    }, 200);
  });
});
