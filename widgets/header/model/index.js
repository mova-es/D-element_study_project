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


    // export default class HeaderModel {
    //     static selector = "[data-js-header]";
    
    //     static instance = null;
    
    //         constructor() {
    //             if(HeaderModel.instance) {
    //                 return HeaderModel.instance
    //             }
    //             this.node = document.querySelector(HeaderModel.selector)
    //             HeaderModel.instance = this;
    //             console.debug(HeaderModel.instance);
    //         }
    //     }