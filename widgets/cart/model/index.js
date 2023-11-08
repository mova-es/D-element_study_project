import { CartItemRender } from "../../../features/CartRender";
import { FormHandle } from "../../../features/FormHandle/index.js";

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
    this.selector = ".cart__items"
    this.path = "/catalog"
    CartItemRender(this.path, this.selector)
    
    setTimeout(() => FormHandle(), 1000);
    
  }
}
