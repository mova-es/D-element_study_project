import useCartStore from "../../shared/zustand/index.js"

export function DeleteItemFromCart () {
    const array = useCartStore.getState().products
    const addToCart = (id = []) => useCartStore.setState({ products: id })

    setTimeout(() => {
        const deleteEls = document.querySelectorAll(".delete")

        deleteEls.forEach(item => {
            item.addEventListener("click",function (e) {
                array.filter(elem => elem !== (e.target.id))
                addToCart(array)
            });
        });
    }, 2000);
}