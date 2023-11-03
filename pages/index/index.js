import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { Popular } from "../../widgets/popular/index.js";

export default () => {
  return getPage({
    title: "Главная",
    body: `
        ${Header()}
            <div class="hero">
                <div class="container">
                    <h1>Популярные товары</h1>
                    ${Popular()}
                    <div class="hero__about_us">
                        <div class="hero__about_us__general_information">
                            <h2>О нас</h2>
                            <h3>&gt; 100 сотрудников</h3>
                            <p>Аттестованных middle и&nbsp;senior разработчиков со&nbsp;всеми необходимыми компетенциями для создания качественных продуктов, которые занимают призовые места на&nbsp;всероссийских и&nbsp;международных конкурсах.</p>
                            <h3>Своя диджитал академия</h3>
                            <p>Курсы по&nbsp;основам управления проектами, веб-разработки, программированию. Много практики, основанной на&nbsp;проектах нашей компании, познавательные лекции и&nbsp;море интерактива.</p>
                        </div>
                        <div class="hero__about_us__courses">
                            <h2>Как пройти курс</h2>
                            <div class="hero__about_us__courses-information">
                                <p>Записывайтесь и&nbsp;получайте новые знания! Делайте репост и&nbsp;отправляйте друзьям, которым эта новость будет полезна.</p>
                                <h3>Ждем вас на&nbsp;наших курсах!</h3>
                            </div>
                            <div class="hero__about_us__courses-qr">
                            <img src="/images/qr-code.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${Footer()}
        `,
  });
};
