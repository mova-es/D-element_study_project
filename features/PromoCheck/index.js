

export async function PromoCheck(path, sum) {
    const inputEl = document.querySelector(".promo-input")
    const applyBtn = document.querySelector(".apply-btn")
    const totalSum = document.querySelector(".total")
    let count = 0

    inputEl.addEventListener("click", () => {
        applyBtn.classList.remove("hide")
    })

    const receivedPromos = await fetch(path).then(res => res.json())

    applyBtn.addEventListener("click", () => {
       receivedPromos.promo.data.forEach(element => {
        if(element === inputEl.value) {
            totalSum.textContent = `${sum * 0.9} ₽`
            count++
        } 
    }) 
    if(count === 0) {
        alert("Такого промокода нет")
    }
    });
    
}