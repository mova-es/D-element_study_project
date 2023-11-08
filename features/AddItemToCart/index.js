import useCartStore from "../../shared/zustand/index.js"

export function AddItemToCart () {
    const array = useCartStore.getState().products
    const addToCart = (id = []) => useCartStore.setState({ products: id })

    setTimeout(() => {
        const btnEls = document.querySelectorAll(".btn")
        btnEls.forEach(btn => {
            btn.addEventListener("click",function (e) {
                e.target.textContent = "В корзине"
                e.target.style.cssText = `
                background-color: #55FF02;
                `
                array.push(e.target.id)
                addToCart(array)
            });
        });
    }, 2000);
}