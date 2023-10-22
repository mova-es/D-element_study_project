import { getPage } from "../../shared/lib/index.js"
import { Button } from "../../shared/ui/button/index.js"
import { Input } from "../../shared/ui/input/index.js"
import { Header } from "../../widgets/header/index.js"
import { Footer } from "../../widgets/footer/index.js"

export default () => {

    return getPage({
        title: "Главная",
        body: `
        ${Header()}
            <div class="hero">
            <h1>Главная</h1>
            ${Input({
                type: "text",
                extraAttrs: {
                    "data-js-require": true,
                    "id": "input",
                    "placeholder": "Введите&nbsp;имя",
                }
            })}
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
