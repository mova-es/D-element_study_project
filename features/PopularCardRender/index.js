import { CardTemplate } from "../../entities/productCard/ui/index.js";

export async function PopularCardRender(path, selector, addedClasses) {
  const response = await fetch(path).then((res) => res.json());

  document.addEventListener("DOMContentLoaded", () => {
    const cardsEl = document.querySelector(selector);
    const productsArray = [];
    response.goods.data.forEach((item) => {
      if (item.isPopular === true) {
        productsArray.push(
          CardTemplate({
            img: item.imageSrc,
            cardLabel: item.label,
            cardName: item.productName,
            additionalClasses: addedClasses,
          })
        );
      }
    });
    cardsEl.innerHTML = productsArray.join("");
  });
}
