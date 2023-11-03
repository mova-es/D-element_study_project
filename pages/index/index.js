import { getPage } from "../../shared/lib/index.js"
import { Header } from "../../widgets/header/index.js"
import { Footer } from "../../widgets/footer/index.js"
import { Popular } from "../../widgets/popular/index.js"

export default () => {

    return getPage({
        title: "Главная",
        body: `
        ${Header()}
            <div class="hero">
            <div class="container">
            <h1>Популярные товары</h1>
            ${Popular()}
            </div>
            </div>
            ${Footer()}
        `
    })
}
