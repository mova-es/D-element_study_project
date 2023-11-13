import { Form } from "../../shared/ui/form/index.js"
import { PromoCheck } from "../PromoCheck/index.js";

export async function FormRender (filteredArray, selector) {
    const cartFormEl = document.querySelector(selector)
    let sum = 0
    const path = "/promo"

    const namesArray = []
    filteredArray.forEach(element => {
        namesArray.push(element.productName)
    })

    if (filteredArray.length !== 0) {
        filteredArray.forEach(element => {
        sum = sum + element.price
       });

       cartFormEl.innerHTML = Form({
        count: filteredArray.length,
        sum: sum,
        totalSum: sum,
        goods: namesArray
       })
    } else {
        cartFormEl.innerHTML = Form({
            count: 0,
            sum: 0,
            totalSum: 0
           })
    }
    PromoCheck(path, sum)
}