import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { Button } from "../../../shared/ui/button/index.js";

export const CardTemplate = (props) => {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "card",
        getCN,
        img,
        cardLabel,
        cardName,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-card="" >
            <img class="${getClassName("img")}" src="${img}">
            <div class="${getClassName("description")}">
            <p class="${getClassName("label")}">${cardLabel}</p>
            <p class="${getClassName("name")}">${cardName}</p>
            ${Button({
                label: "В&nbsp;корзину",
                extraAttrs: {
                    "data-js-require": true,
                    "id": "card_btn"
                },
                extraClasses: {
                    isHidden: false,
                    isDisabled: false,
                }
            })}
            </div>
        </div>
            `
}