import { Swiper } from "swiper";
import { Navigation } from "swiper/modules"

const params = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    slidesPerView: 2,
    modules: [ Navigation ]
};

export const slidersInit = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    })
};