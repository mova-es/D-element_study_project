export default class FilterModel {

    static selectors = {
        instanceSelector: "[data-js-filter]",
        checkboxSelector: "data-js-search-param"
    }

    static instance = null

    constructor() {
    
        if(FilterModel.instance) {
            return FilterModel.instance
        }
        this.instance = document.querySelector(FilterModel.selectors.instanceSelector)
        this.inputs = Array.from(document.querySelectorAll(`[${FilterModel.selectors.checkboxSelector}]`)) 
        this.url = new URL(window.location.href)
        this.params = new URLSearchParams(this.url.search)
        this.init()
    }

        getSearchParam(checkbox) {
            return checkbox.getAttribute("value")
        }

        init() {
            this.inputs.forEach(input => {
                input.addEventListener("change", (e) => {
                    if(e.target.checked === true) {
                        this.params.set(`${this.getSearchParam(e.target)}`, 10)
                        console.log(this.params.toString())
                    } else if (e.target.checked === false) {
                        this.params.delete(`${this.getSearchParam(e.target)}`)
                        console.log(this.params.toString())
                    }
                    
                });
        });
    }
}