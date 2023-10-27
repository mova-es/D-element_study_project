import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { Button } from "../../../shared/ui/button/index.js";

export function CreateCardTemplate(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "card",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-card="" >
            <img class="${getClassName("img")}">
            <div class="${getClassName("description")}">
            <p class="${getClassName("label")}">Бесплатный курс</p>
            <p class="${getClassName("name")}">Фронтенд разработчик</p>
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