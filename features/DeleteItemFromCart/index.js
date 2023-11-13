import useCartStore from "../../shared/zustand/index.js"

export function DeleteItemFromCart () {
    const array = useCartStore.getState().products
    const deleteFromCart = (id = []) => useCartStore.setState({ products: id })

    setTimeout(() => {
        const deleteEls = document.querySelectorAll(".delete")

        deleteEls.forEach(item => {
            item.addEventListener("click",function (e) {
                const resultArray = array.filter(elem => elem !== (e.currentTarget.parentElement.dataset.id))
                deleteFromCart(resultArray)
                location.reload()
            });
        });
    }, 2000);
}