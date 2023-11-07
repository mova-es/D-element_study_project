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
        cardReg,
        courseStartDate,
        additionalClasses
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <div class="${getClassName("", extraClasses)} ${additionalClasses}" ${getAttrs(extraAttrs)}>
            <img class="${getClassName("img")}" src="${img}">
            <div class="${getClassName("description")}">
                <p class="${getClassName("label")}">${cardLabel}</p>
                <p class="${getClassName("name")}">${cardName}</p>
                <p class="${getClassName("info")}">Регистрация на курс: <span>${cardReg}</span></p>
                <p class="${getClassName("info")}">Начало курса: <span>${courseStartDate}</span></p>
            </div>
            <svg class="cart__item__icon icon" width="20" height="20">
                <use xlink:href="icons/icons.svg#close"></use>
            </svg>
        </div>
            `
}