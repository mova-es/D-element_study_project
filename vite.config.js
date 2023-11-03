import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"
import mainPage from "./pages/index/index.js"
import catalogPage from "./pages/catalog/index.js"
import cartPage from "./pages/cart/index.js"


const pages = [
    {
        name: "index",
        content: mainPage()
    },
    {
        name: "catalog",
        content: catalogPage()
    },
    {
        name: "cart",
        content: cartPage()
    }
]

export default defineConfig({
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: pages.map(({ name, content }) => ({
                filename: `${name}.html`,
                template: `${name}.html`,
                injectOptions: {
                    data: {
                        injectScript: content,
                    },
                },
            })),
        })

    ]
})

