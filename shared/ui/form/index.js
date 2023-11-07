import { commonComponentProps, getAttrs } from "../../lib/index.js"
import { Button } from "../button/index.js"

export function Form (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "form", getCN, count = 0, sum = 0, totalSum = 0 } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<form class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
        <h4>Итого</h4>
        <div class="form__count-and-sum">
            <p class="form__text">${count}<span> товара</span></p>
            <p class="form__sum">${sum}<span> ₽</span></p>
        </div>
        <p>Промокод</p>
        <input type="text" placeholder="Введите промокод">
        <div class="form__total-sum">
            <p class="form__text">Итоговая сумма</p>
            <p class="form__sum">${totalSum}<span> ₽</span></p>
        </div>
            ${Button({
                label: "Оформить заказ",
            })}
        </form>
    `
}
