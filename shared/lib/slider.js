import "swiper/css";
import { Swiper, Autoplay } from "swiper";

const params = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    modules: [ Autoplay ]
};

export const slidersInit = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    })
};