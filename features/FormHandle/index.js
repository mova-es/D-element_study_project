import { showMessage } from "../ShowMessage/index.js"

export async function FormHandle() {

    async function sendData(data) {
        return await fetch("/cart", {
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          body: data,
        })
      }

    function serializeForm(formNode) {
        return new FormData(formNode)
      }

    async function handleFormSubmit(event) {
        event.preventDefault()
        const data = serializeForm(event.target)
        const response = await sendData(data)
        
        if(response.status === 200) {
           showMessage()
        }
      }
      
      const formEl = document.getElementById("form")
      formEl.addEventListener("submit", handleFormSubmit)
}
