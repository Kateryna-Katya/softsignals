import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

let featuresSwiper = null;

// 🔹 FEATURES (тільки ≥1440)
function initFeaturesSwiper() {
  if (window.innerWidth >= 1440) {
    if (!featuresSwiper) {
      featuresSwiper = new Swiper('.features-swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 4,
        spaceBetween: 32,
      });
    }
  } else {
    if (featuresSwiper) {
      featuresSwiper.destroy(true, true);
      featuresSwiper = null;
    }
  }
}

// 🔹 GALLERY (працює завжди)
const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    1440: {
      slidesPerView: 3,
    }
  }
});


// запуск
window.addEventListener('load', initFeaturesSwiper);
window.addEventListener('resize', initFeaturesSwiper);