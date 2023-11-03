import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";

export default () => {

    return getPage({
        title: "Корзина",
        body: `
        ${Header()}
            <div class="cart">
                <h1 class="cart__heading">Корзина</h1>
                <div class="container">
                </div>
            </div>
        ${Footer()}
        `
    })
}