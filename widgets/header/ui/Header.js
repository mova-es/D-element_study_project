import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { Logo } from "../../../shared/ui/logo/index.js";

export function Header(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "header",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
            <header  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
            <div class="${getClassName("logo", { isValid: true })}">
                ${Logo({ imgSrc: "/icons/logo.svg" })}
            </div>
            <div class="${getClassName("nav")}">
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/catalog.html">Каталог</a>
                    </li>
                    <li>
                        <a class="${getClassName("cart")}" href="/">Корзина</a>
                    </li>
                </ul>
            </div>
            </header>
            `
}