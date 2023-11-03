import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export function Cart(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "catalog__filter",
        getCN,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
            <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-cart="" >
            
            </div>
            `
}