$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="" /></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs__content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs__content--active");
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="" /></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="" /></button>',
  });

  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("200");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $(".catalog__filters-btngrid").on("click", function () {
    $(this).addClass("catalog__filters-button--active");
    $(".catalog__filters-btnline").removeClass(
      "catalog__filters-button--active"
    );
    $(".product-item__wrapper").removeClass("product-item__wrapper--list");
  });

  $(".catalog__filters-btnline").on("click", function () {
    $(this).addClass("catalog__filters-button--active");
    $(".catalog__filters-btngrid").removeClass(
      "catalog__filters-button--active"
    );
    $(".product-item__wrapper").addClass("product-item__wrapper--list");
  });

  $(".rate-yo").rateYo({
    normalFill: "#c4c4c4",
    ratedFill: "#1c62cd",
    spacing: "7px",
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });
});
