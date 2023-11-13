export default class HeaderModel {

    static selector = "[data-js-header]"

    static instance = null

        constructor() {
            if(HeaderModel.instance) {
                return HeaderModel.instance
            }
            this.instance = document.querySelector(HeaderModel.selector)
        }
    }