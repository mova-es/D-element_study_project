import { getPage } from "../../shared/lib/index.js";
import { Filter } from "../../widgets/filter/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { cat } from "../../shared/constants/cat.js";

export default () => {
  return getPage({
    title: "Каталог",
    body: `
        ${Header()}
        <section class="catalog">
        <div class="container catalog__container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ul>
            <li><a href="index.html">Главная</a></li>
            <li><a href="catalog.html">Каталог</a></li>
          </ul>
        </nav>
        <h1 class="catalog__heading">Каталог</h1>
        <div class="catalog__main">
        ${Filter({ category: cat })}
        <div class="catalog__cards">
        </div>
        </div>
        </div>
        </div>
        </section>
        ${Footer()}
        `,
  });
};
