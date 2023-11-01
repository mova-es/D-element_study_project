import { CardRender } from "../../../features/CardRender/index.js";

export default class FilterModel {
  static selectors = {
    instanceSelector: "[data-js-filter]",
    checkboxSelector: "data-js-search-param",
  };

  static instance = null;

  constructor() {
    if (FilterModel.instance) {
      return FilterModel.instance;
    }
    this.instance = document.querySelector(FilterModel.selectors.instanceSelector)
    this.inputs = Array.from(document.querySelectorAll(`[${FilterModel.selectors.checkboxSelector}]`))
    this.url = new URL("/catalog", window.location.href)
    // this.params = new URLSearchParams(this.url.search)
    this.init()
    this.selector = ".catalog__cards"
    this.path = "/catalog"
    this.addedClasses = ""
    CardRender(this.path, this.selector, this.addedClasses)
  }

  getSearchParam(checkbox) {
    return checkbox.getAttribute("value")
  }

  init() {
    this.inputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        if (e.target.checked === true) {
          this.url.searchParams.set("id", `${this.getSearchParam(e.target)}`)
         console.log(this.url.toString())
          CardRender(this.url.toString())
        } else if (e.target.checked === false) {
          this.url.searchParams.delete("id", `${this.getSearchParam(e.target)}`)
        }
      })
    })
  }
}
