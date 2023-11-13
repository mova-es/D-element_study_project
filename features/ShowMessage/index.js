export const showMessage = () => {
    const modalwindow = document.getElementById("modal")
    const closeModalWindow = document.querySelector(".modal__close")
    const bodyEl = document.querySelector("body");

    modalwindow.style.cssText = `
    visibility: visible;
    `

    bodyEl.classList.add("modal__active")

    const closeModal = event => {
        const target = event.target;

        if(target === modalwindow || target === closeModalWindow) {
            modalwindow.style.cssText = `visibility: hidden;`
            bodyEl.classList.remove("modal__active");
        }
    }
    modalwindow.addEventListener("click", closeModal);
}