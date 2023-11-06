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
            <div class="${getClassName("heading", extraClasses)}">
                <h1>Популярные товары</h1>
                <div class="${getClassName("navigation-buttons", extraClasses)}">
                    <div class="${getClassName("btn-prev", extraClasses)} swiper-button-prev">
                        <svg class="icon" width="24" height="24">
                            <use xlink:href="icons/icons.svg#arrow-left"></use>
                        </svg>
                    </div>
                    <div class="${getClassName("btn-next", extraClasses)} swiper-button-next">
                        <svg class="icon" width="24" height="24">
                            <use xlink:href="icons/icons.svg#arrow-right"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="${getClassName("cards", extraClasses)} swiper-wrapper" ${getAttrs(extraAttrs)} data-js-cards="" >
            </div>
        </div>
            `
}