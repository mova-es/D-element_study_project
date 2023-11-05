import { slidersInit } from "../../shared/lib/slider.js";
import "swiper/css"
import "swiper/css/navigation"

export function sliderFeature() {
  slidersInit(".popular", {
    breakpoints: {
    768: {
      slidesPerView: "2",
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: "3",
      spaceBetween: 26,
    },

    1240: {
      slidesPerView: "4",
      spaceBetween: 30,
    }
  } }
  )
} 