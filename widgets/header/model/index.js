export default class HeaderModel {
        constructor() {
            this.selector = "[data-js-header]";
            this.instance = null;

            if(HeaderModel.instance) {
                return HeaderModel.instance
            }
            this.instance = document.querySelector(HeaderModel.selector)
            console.debug(HeaderModel.instance);
        }
    }