import { CardTemplate } from "../../entities/productCard/ui/index.js" 

export async function CardRender (path, selector, addedClasses) {
    const cardsEl = document.querySelector(selector)
    const productsArray = []
    const response = await fetch(path).then(res => res.json())
    response.goods.data.forEach(item => productsArray.push(CardTemplate({
            img: item.imageSrc,
            cardLabel: item.label,
            cardName: item.productName,
            productId: item.ProductId,
            additionalClasses: addedClasses
        })))
    cardsEl.innerHTML = productsArray.join("")
}