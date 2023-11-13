import { commonComponentProps, getAttrs } from "../../lib/index.js"
import { Button } from "../button/index.js"

export function Form (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "form", getCN, count = 0, sum = 0, totalSum = 0, goods = [] } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
    <form id="form" class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
        <h4>Итого</h4>
        <div class="form__count-and-sum">
            <p class="form__text">${count}<span> товара</span></p>
            <input type="hidden" name="Goods" value="${goods}">
            <p class="form__sum">${sum}<span> ₽</span></p>
            <input type="hidden" name="Sum is" value="${sum}">
        </div>
        <p>Промокод</p>
        <div class="input__container">
            <input class="promo-input" type="text" placeholder="Введите промокод">
            <a class="apply-btn hide">Применить</a>
        </div>

        <div class="form__total-sum">
            <p class="form__text">Итоговая сумма</p>
            <p class="form__sum total">${totalSum}<span> ₽</span></p>
            <input type="hidden" name="Total sum" value="Итого ${totalSum}">
        </div>

            ${Button({
                label: "Оформить заказ",
                extraClasses: "form"
            })}
    </form>
    `
}
