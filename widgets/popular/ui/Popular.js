import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export function Popular(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "popular",
        getCN,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <div class="${getClassName("", extraClasses)} swiper" ${getAttrs(extraAttrs)} data-js-popular="" >
            <div class="${getClassName("cards", extraClasses)} swiper-wrapper" ${getAttrs(extraAttrs)} data-js-cards="" >

            </div>
        </div>
            `
}