import { rest } from "msw"
import { goods } from "../constants/goods.js"
import { promo } from "../constants/promo.js"

export const handlers = [

  rest.post("/cart", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  rest.get("/promo", (req, res, ctx) => {
    return res(
      ctx.status(200), ctx.json({ promo })
    )
  }),

  rest.get("/catalog", (req, res, ctx) => {
    const url = new URL(req.url)
    const productIds = url.searchParams.getAll("id")
    
    if(productIds.length === 0) {
      return res(
      ctx.status(200), ctx.json({ goods }),
    )
  } else {
    const filteredGoods = []
    for (let i = 0; i < goods.data.length; i++) {
      for (let j = 0; j < productIds.length; j++) {
        if(goods.data[i].category === productIds[j]) {
          filteredGoods.push(goods.data[i])
        }
      }
    }
  return res(
    ctx.status(200), ctx.json({ filteredGoods })) }
}) ]