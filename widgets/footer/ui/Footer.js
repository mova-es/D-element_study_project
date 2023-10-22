import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export function Footer(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
            <footer  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
            
            <div class="${getClassName("main")}">
                <ul>
                    <li>
                        <a href="#">Курсы</a>
                    </li>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </div>
            <div class="${getClassName("aux")}">
                <ul>
                    <li>
                        <a href="#">Адрес</a>
                    </li>
                    <li>
                        <a href="#">Почта</a>
                    </li>
                    
                </ul>
            </div>
            </footer>
            `
}