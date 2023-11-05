// import { CardRender } from "../../../features/CardRender/index.js";

export default class CartModel {
  static selectors = {
    instanceSelector: "[data-js-cart]",
  };

  static instance = null;

  constructor() {
    if (CartModel.instance) {
      return CartModel.instance;
    }
    this.instance = document.querySelector(CartModel.selectors.instanceSelector)
    // this.selector = ".catalog__cards"
    // this.path = "/catalog"
    // this.addedClasses = ""
    // CardRender(this.path, this.selector, this.addedClasses)
  }
  
}
