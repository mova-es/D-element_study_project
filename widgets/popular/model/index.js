import { AddItemToCart } from "../../../features/AddItemToCart/index.js";
import { PopularCardRender } from "../../../features/PopularCardRender/index.js";
import { sliderFeature } from "../../../features/Slider/index.js";


export default class PopularModel {
  static selector = "[data-js-popular]"
  
  static instance = null;

  constructor() {
    if (PopularModel.instance) {
      return PopularModel.instance;
    }
    this.instance = document.querySelector(PopularModel.selector)
    // this.button = document.querySelector(".btn")
    // console.log(this.button)
    this.path = "/catalog"
    this.selector = ".popular__cards"
    this.addedClasses = "swiper-slide"
    PopularCardRender(this.path, this.selector, this.addedClasses)
    sliderFeature()
    // this.buttonEls = document.querySelectorAll(".btn")
    // console.log(this.buttonEls)
  }

}
