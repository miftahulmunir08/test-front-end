// JavaScript for toggling the navbar in mobile view
const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const swiperEl = document.querySelector("swiper-container");
Object.assign(swiperEl, {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
swiperEl.initialize();

$(document).ready(function () {
  $(".navbar a").on("click", function (event) {
    // Pastikan ini adalah tautan ke section di halaman yang sama
    if (this.hash !== "") {
      // Mencegah aksi default
      event.preventDefault();

      // Simpan hash
      var hash = this.hash;

      // Menggunakan jQuery untuk animasi scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Mengubah URL setelah animasi selesai
          window.location.hash = hash;
        }
      );
    }
  });
  const mySwiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: false, // Initial state
    // Other Swiper options as needed
  });

  // Listen to the 'slideChange' event to detect dragging
  mySwiper.on("slideChangeTransitionStart", function () {
    // Set centeredSlides to true
    mySwiper.params.centeredSlides = true;

    // Re-initialize the Swiper to apply the changes
    mySwiper.update();
  });
});
