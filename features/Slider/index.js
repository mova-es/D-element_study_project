import { slidersInit } from "../../shared/lib/slider.js";

export function sliderFeature() {
  slidersInit(".popular__cards", {
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
  
      1024: {
        slidesPerView: "auto",
        spaceBetween: 26,
      },
  
      1240: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
} 