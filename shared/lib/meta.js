export const metatag = { 
    charset: "UTF-8",
    name: "viewport" ,
    content: "width=device-width, initial-scale=1.0" 
}

export function getMetaTags(obj) {
    const result = []
    Object.entries(obj).forEach(([ key, value ]) => {
        result.push(`${key}="${value}"`)
    })
    return `<meta ${result.join(" ")} />` 
}