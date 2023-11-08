import { CartItem } from "../../entities/CartItem/ui/index.js";
import useCartStore from "../../shared/zustand/index.js";
import { FormRender } from "../CartFormRender/index.js";

export async function CartItemRender (path, selector) {
    const cartItemsEl = document.querySelector(selector)
    const productsArrayToRender = []
    const listOfGoodsIds = useCartStore.getState().products
    const filteredGoods = []
    const formSelector = ".cart__form"

    const receivedData = await fetch(path).then(res => res.json())

    for (let i = 0; i < receivedData.goods.data.length; i++) {
      for (let j = 0; j < listOfGoodsIds.length; j++) {
        if(receivedData.goods.data[i].ProductId === listOfGoodsIds[j]) {
          filteredGoods.push(receivedData.goods.data[i])
        }
      }
    }

    if (filteredGoods.length !== 0) {
       filteredGoods.forEach(item => productsArrayToRender.push(CartItem({
        img: item.imageSrc,
        cardLabel: item.label,
        cardName: item.productName,
        cardRegStart: item.registration.startDate,
        cardRegEnd: item.registration.endDate,
        courseStartDate: item.startCourse,
        productId: item.ProductId,
    })))
    cartItemsEl.innerHTML = productsArrayToRender.join("") 
    } else {
    cartItemsEl.innerHTML = `<p>Товары не добавлены в корзину</p>`
    }

    FormRender(filteredGoods, formSelector)
}