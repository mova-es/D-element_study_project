export function ClicktoButton () {
    document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.querySelector(".btn")
    const inputEl = document.querySelector(".input")
    const bodyEl = document.querySelector("body")
    button.addEventListener("click", () => {
        showMessage()
    })

    function showMessage () {
        const greetingEl = document.createElement("h2")
        greetingEl.textContent = `Привет, ${inputEl.value}`
        bodyEl.append(greetingEl)
    }
})
}
