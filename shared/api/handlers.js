import { rest } from "msw"

export const handlers = [

  rest.post("/cartSubmit", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  // rest.get("/catalog", (req, res, ctx) => {
  //   const url = new URL(req.url)
  //   const productId = url.searchParams.get("id")

  //   return res(
  //     ctx.status(200), ctx.json({ productId }))
  // }),

  rest.get("/catalog", (req, res, ctx) => {
    const url = new URL(req.url)
    const productId = url.searchParams.get("id")
    
    if(!productId) {
      return res(
      ctx.status(200), ctx.json({
        "isSuccess": "true",
        "data": [
          {
          "ProductId": "1",
          "label": "Бесплатный офлайн курс",
          "productName": "«Frontend-разработчик»",
          "category": "front",
          "imageSrc": "/images/front.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "ProductId": "2",
          "label": "Бесплатный офлайн курс",
          "productName": "«Backend разработка»",
          "category": "backend",
          "imageSrc": "/images/back.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "ProductId": "3",
          "label": "Бесплатный офлайн курс",
          "productName": "«Project manager»",
          "category": "management",
          "imageSrc": "/images/project.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "ProductId": "4",
          "label": "Бесплатный офлайн курс",
          "productName": "«Аналитик»",
          "category": "analysis",
          "imageSrc": "/images/front.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "ProductId": "5",
          "label": "Бесплатный офлайн курс",
          "productName": "«Инфраструктура/Администрирование»",
          "category": "infrastructure",
          "imageSrc": "/images/infrastructure.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "ProductId": "6",
          "label": "Бесплатный офлайн курс",
          "productName": "«Мобильная разработка»",
          "category": "mobile",
          "imageSrc": "/images/back.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
      ]
      }),
    )
  } else
  return res(
    ctx.status(200), ctx.json({ productId }))
}) ]