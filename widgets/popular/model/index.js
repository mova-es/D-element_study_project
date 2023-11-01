import { CardRender } from "../../../features/CardRender/index.js";
// import { sliderFeature } from "../../../features/Slider/index.js";

export default class PopularModel {
  static selector = "[data-js-popular]"
  
  static instance = null;

  constructor() {
    if (PopularModel.instance) {
      return PopularModel.instance;
    }
    this.instance = document.querySelector(PopularModel.selector)
    this.path = "/catalog"
    this.selector = ".popular__cards"
    this.addedClasses = "swiper-slide"
    CardRender(this.path, this.selector, this.addedClasses)
    // sliderFeature()
  }
}
