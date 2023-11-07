import useCartStore from "../../shared/zustand/index.js"
import { CartItem } from "../../entities/CartItem/ui/index.js" 

export function AddItemToCart () {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__ .connect({
        name: "Name field"
    })
    connection?.init(useCartStore.getState())

    function AddFunction() {
        const push = useCartStore((state) => state.AddToCart)
        return push
    }

    function deleteFunction() {
        const deleteFunc = useCartStore((state) => state.deleteFromCart)
        return deleteFunc
    }

    setTimeout(() => {
        const btnEls = document.querySelectorAll(".btn")
        btnEls.forEach(btn => {
            btn.addEventListener("click",function (e) {
                console.log(e.target)
                useCartStore.setState({ productArray: btn.id })
            });
        });
    }, 2000);
}