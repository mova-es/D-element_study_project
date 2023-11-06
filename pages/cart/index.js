import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { Cart } from "../../widgets/cart/ui/Cart.js";


export default () => {

    return getPage({
        title: "Корзина",
        body: `
        ${Header()}
        ${Cart()}
        ${Footer()}
        `
    })
}