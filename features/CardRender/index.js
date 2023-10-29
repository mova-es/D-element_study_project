import { CardTemplate } from "../../entities/productCard/ui/index.js" 

export async function DataRender () {
    const response = await fetch("/catalog").then(res => res.json())
    return response.data.forEach(item => 
        CardTemplate({
            img: item.imageSrc,
            cardLabel: item.label,
            cardName: item.productName
        }))
}