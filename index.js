function updateImageSource() {
  var homeBanner = document.querySelector(".home_banner");
  if (window.innerWidth <= 768) {
    homeBanner.src = "assets/Image27/Image 27@2x.png";
  } else {
    homeBanner.src =
      "assets/Incredible-Shop-Homepage-Banner/Incredible-Shop-Homepage-Banner@2x.png";
  }
}
function updateAccount() {
  var homeBanner = document.querySelector(".home_banner");
  if (window.innerWidth <= 400) {
    homeBanner.src = "assets/Image27/Image 27@2x.png";
  } else {
    homeBanner.src =
      "assets/Incredible-Shop-Homepage-Banner/Incredible-Shop-Homepage-Banner@2x.png";
  }
}

updateImageSource();
window.addEventListener("resize", updateImageSource);

jQuery(".slick-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
  ],
});



jQuery(".lady-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  // arrows: true,
  // arrows: false,
  responsive: [
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
  ],
});

jQuery(".slick-slider1").slick({
  slidesToShow: 2,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
