import { CardTemplate } from "../../../entities/productCard/ui/index.js"

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
        this.cardsEl = document.querySelector(".catalog__cards")
        this.inputs = Array.from(document.querySelectorAll(`[${FilterModel.selectors.checkboxSelector}]`)) 
        this.url = new URL(window.location.href)
        this.buttons = []
        this.init()
        this.getDataFromServer()
    }

        getSearchParam(checkbox) {
            return checkbox.getAttribute("value")
        }

        init() {
            this.inputs.forEach(input => {
                input.addEventListener("change", (e) => {
                    if(e.target.checked === true) {
                        this.url.searchParams.set("id", `${this.getSearchParam(e.target)}`)

                    } else if (e.target.checked === false) {
                        this.url.searchParams.delete("id", `${this.getSearchParam(e.target)}`)
                        this.getDataFromServer(this.url.toString())
                    }
                });
            });
        }

        async getDataFromServer(path = "/catalog") {
            const response = await fetch(path).then(res => res.json())
            const receivedData = response.data

            receivedData.forEach(item => {
                this.buttons.push(CardTemplate({ 
                    img: item.imageSrc, 
                    cardLabel: item.label, 
                    cardName: item.productName }))
            })

            this.cardsEl.innerHTML = this.buttons.join("")
        }
}