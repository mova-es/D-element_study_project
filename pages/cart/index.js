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
        <a href="catalog.html">
        <svg class="icon" width="24" height="24">
        <use xlink:href="icons/icons.svg#arrow-left"></use>
        </svg>
        Продолжить покупки</a>
        ${Footer()}
        `
    })
}