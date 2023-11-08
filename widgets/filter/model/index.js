import { CardRender } from "../../../features/CardRender/index.js";
import { FilteredCardRender } from "../../../features/FilteredCardRender/index.js";

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
        if (e.target.value !== "all" && e.target.checked === true) {
          this.inputs[0].checked = false
          this.inputs[0].parentElement.style.cssText = `
          background-color: #D7E8FF;
          color: #1C6CD5;
          `
          e.target.parentElement.style.cssText = `
          background-color: #1C6CD5;
          color: #FFF;
          `
          this.url.searchParams.append("id", `${this.getSearchParam(e.target)}`)
          FilteredCardRender(this.url, this.selector, this.addedClasses)

        } else if (e.target.checked === false) {
          this.url.searchParams.delete("id", `${this.getSearchParam(e.target)}`)
          FilteredCardRender(this.url, this.selector, this.addedClasses)

          e.target.parentElement.style.cssText = `
          background-color: #D7E8FF;
          color: #1C6CD5;
          `
        } else if (e.target.value === "all" && e.target.checked === true) {
          CardRender(this.path, this.selector, this.addedClasses)
          e.target.parentElement.style.cssText = `
          background-color: #1C6CD5;
          color: #FFF;
          `
        }
      })
    })
  }
}
