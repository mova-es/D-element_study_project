import HeaderModel from "../../widgets/header/model/index.js"
import FilterModel from "../../widgets/filter/model/index.js"
import PopularModel from "../../widgets/popular/model/index.js"
import CartModel from "../../widgets/cart/model/index.js"
import { DeleteItemFromCart } from "../../features/DeleteItemFromCart/index.js"

export const runApp = async () => {
    const runWidgets = async () => {
        new HeaderModel()
        new FilterModel()
        new PopularModel()
        new CartModel()
        DeleteItemFromCart()
        await Promise.all(Object.keys(import.meta.glob("../../**/*.pcss", { "query": "?inline" })).map(path => import(`${path}`).then((module) => module?.default ?? module)))
    }
    switch (process.env.NODE_ENV) {
        case "development":
            await import("../../shared/api/browser.js")
                .then(async ({ worker }) => {
                    await worker.start().then(() => {
                        console.debug("App dev run")
                        runWidgets()
                    })
                })

    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })