export const metatag = { 
    name: "viewport" ,
    content: "width=device-width, initial-scale=1.0" 
}

export function getMetaTags(obj) {
    const result = []
    Object.entries(obj).forEach(([ key, value ]) => {
        result.push(`<meta ${key}="${value}"/>`)
    })
    return result.join(" ")
}