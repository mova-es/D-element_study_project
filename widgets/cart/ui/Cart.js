import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export function Cart(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "cart",
        getCN,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-cart="" >
            <h1 class="${getClassName("heading", extraClasses)}">Корзина</h1>
                <div class="container">
                </div>
        </div>
            `
}