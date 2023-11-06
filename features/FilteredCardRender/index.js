import { CardTemplate } from "../../entities/productCard/ui/index.js" 

export async function FilteredCardRender (path, selector, addedClasses) {
    const cardsEl = document.querySelector(selector)

    const productsArray = []
    const response = await fetch(path).then(res => res.json())
    response.filteredGoods.forEach(item => productsArray.push(CardTemplate({
            img: item.imageSrc,
            cardLabel: item.label,
            cardName: item.productName,
            productId: item.ProductId,
            additionalClasses: addedClasses
        })))
    cardsEl.innerHTML = productsArray.join("")
}