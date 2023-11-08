import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export const CartItem = (props) => {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "cart__item",
        getCN,
        img,
        cardLabel,
        cardName,
        cardRegStart,
        cardRegEnd,
        courseStartDate,
        additionalClasses,
        productId
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <div class="${getClassName("", extraClasses)} ${additionalClasses}" ${getAttrs(extraAttrs)} data-id="${productId}">
            <img class="${getClassName("img")}" src="${img}">
            <div class="${getClassName("description")}">
                <p class="${getClassName("label")}">${cardLabel}</p>
                <p class="${getClassName("name")}">${cardName}</p>
                <p class="${getClassName("info")}">Регистрация на курс: <span>${cardRegStart} - ${cardRegEnd}</span></p>
                <p class="${getClassName("info")}">Начало курса: <span>${courseStartDate}</span></p>
            </div>
            <svg class="cart__item__icon icon delete" width="20" height="20">
                <use xlink:href="icons/icons.svg#close"></use>
            </svg>
        </div>
            `
}