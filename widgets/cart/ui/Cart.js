import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { Form } from "../../../shared/ui/form/index.js";
import { CartItem } from "../../../entities/CartItem/ui/index.js";

export function Cart(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "cart",
        getCN,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <section class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-cart="" >
            <div class="container cart__container">
                <nav aria-label="Breadcrumb" class="breadcrumb">
                    <ul>
                        <li><a href="index.html">Главная</a></li>
                        <li><a href="cart.html">Корзина</a></li>
                    </ul>
                </nav>
                <h1 class="${getClassName("heading", extraClasses)}">Корзина</h1>
                <div class="${getClassName("main", extraClasses)}">
                    <div class="${getClassName("items", extraClasses)}">
                    ${CartItem({
                        img: "/images/front.png",
                        cardLabel: "Бесплатный офлайн курс",
                        cardName: "«Frontend-разработчик»",
                        cardReg: "18.08.2023",
                        courseStartDate: "26.09.2023",
                        additionalClasses: "",
                    })}
                    </div>
                    <div class="${getClassName("form", extraClasses)}">
                    ${Form()}
                    </div>
                </div>
                <a class="${getClassName("link", extraClasses)}" href="catalog.html">
                <svg class="icon" width="24" height="24">
                <use xlink:href="icons/icons.svg#arrow-left"></use>
                </svg>
                <span>Продолжить покупки</span>
                </a>
            </div>
        </section>
        `
}