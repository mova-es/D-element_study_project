import { withNaming } from "@bem-react/classname"
import { metatag, getMetaTags } from "./meta.js"


export const getPage = ({ body = ``, title = ``, meta = metatag }) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="/favicon.ico" />
    ${getMetaTags(meta)}
    <title>${title}</title>
    <script src="../app/api/App.js" defer type="module"></script>
</head>
<body>
    ${body}
</body>
</html>
    `
}

export const commonComponentProps = {
    extraClasses: {},
    extraAttrs: {},
    children: ``,
    getCN: (block = "", elem = "", mod = {}) => {
        console.debug(block, elem, mod)
        return withNaming({
            n: "",
            e: "__",
            m: "--",
            v: "-"
        })(block, elem)(mod)
    }
}

export const getAttrs = (attrs) => {
    const result = []
    Object.entries(attrs).forEach(([ key, value ]) => {
        result.push(`${key}=${value}`);
    })
    return result.join(" ")
}

