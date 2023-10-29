import "swiper/pcss";
import { slidersInit } from "../../shared/lib/slider.js";

slidersInit(".popular__slider", {
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
 
  