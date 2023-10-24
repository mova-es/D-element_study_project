import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export function Footer(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
        <footer  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
            
            <div class="${getClassName("main")}">
                <ul>
                    <li>
                        <a href="#">Курсы</a>
                    </li>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </div>
            <div class="${getClassName("aux")}">
                <div class="${getClassName("aux-item")}">
                    <dl class="datalist">
                        <dt class="datalist__label">Наш адрес</dt>
                        <dd class="datalist__content">
                        <address class="address" ${getAttrs(extraAttrs)} data-js-picker-current-address="" >г. Челябинск, ул. Лесопарковая, 5/2</address>
                        </dd>
                    </dl>
                </div>
            
                <div class="${getClassName("aux-item")}">
                    <dl class="datalist">
                        <dt class="datalist__label">Эл.почта</dt>
                        <dd class="datalist__content">
                            <div class="email">
                                <a rel="contact" href="mailto:info@d-element.ru" class="email__link">info@d-element.ru</a>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </footer>
         `
}