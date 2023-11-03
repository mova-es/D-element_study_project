import { Swiper } from "swiper";

const params = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
};

export const slidersInit = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    })
};