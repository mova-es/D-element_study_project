import { getPage } from "../../shared/lib/index.js";
import { Filter } from "../../widgets/filter/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { CreateCardTemplate } from "../../entities/productCard/ui/index.js";

const cat = [
  {
    name: "Все курсы",
    searchParam: "all",
    isChecked: true,
  },
  {
    name: "Веб-разработка",
    searchParam: "front",
    isChecked: false,
  },
  {
    name: "Бэкенд-разработка",
    searchParam: "back",
    isChecked: false,
  },
  {
    name: "Мобильная разработка",
    searchParam: "mobile",
    isChecked: false,
  },
  {
    name: "Анализ данных",
    searchParam: "analysis",
    isChecked: false,
  },
  {
    name: "IT-инфраструктура",
    searchParam: "infrastructure",
    isChecked: false,
  },
  {
    name: "Управление разработкой",
    searchParam: "management",
    isChecked: false,
  },
];
export default () => {
  return getPage({
    title: "Каталог",
    body: `
        ${Header()}
        <section class="catalog">
        <div class="container">
        <h1 class="heading">Каталог</h1>
        ${Filter({ category: cat })}
        ${CreateCardTemplate()}

        </div>
        </div>
        </section>
        ${Footer()}
        `,
  });
};
