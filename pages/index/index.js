import { getPage } from "../../shared/lib/index.js"
import { Button } from "../../shared/ui/button/index.js"
import { Header } from "../../widgets/header/index.js"
import { Footer } from "../../widgets/footer/index.js"

export default () => {

    return getPage({
        title: "Главная",
        body: `
        ${Header()}
            <div class="hero">
            <h1>Популярные товары</h1>
            ${Button({
                label: "Тест",
                extraAttrs: {
                    "data-js-require": true,
                    "id": "btn"
                },
                extraClasses: {
                    isHidden: false,
                    isDisabled: false,
                }
            })}
            </div>
            
            ${Footer()}
        `
    })
}
