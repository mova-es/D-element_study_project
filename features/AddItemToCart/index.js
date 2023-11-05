import useCartStore from "../../shared/zustand/index.js"
import { CartItem } from "../../entities/CartItem/ui/index.js" 

export function AddItemToCart () {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__ .connect({
        name: "Name field"
    })
    connection?.init(useCartStore.getState())

    document.addEventListener("DOMContentLoaded", function (e) {
        const btnEls = document.querySelectorAll(".btn")
        console.log(btnEls)

        btnEls.forEach(btn => {
        btn.addEventListener("click", function(e) {
            console.log(e.target)
        });
    })
    })
}