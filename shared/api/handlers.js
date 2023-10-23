import { rest } from "msw"

export const handlers = [
  rest.post("/cartSubmit", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  rest.get("/getProducts", (req, res, ctx) => {
    return res(
      ctx.status(200), ctx.json({
        "isSuccess": "true",
        "data": {
          "idProduct": "123",
          "label": "Бесплатный офлайн курс",
          "productName": "«Frontend-разработчик»",
          "category": [
              "Веб-разработка",
              "Мобильная разработка"
          ],
          "imageSrc": "/images/course-image.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        }
      }),
    )
  }),
]