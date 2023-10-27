import { rest } from "msw"

export const handlers = [

  rest.delete("/cart/:id", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  rest.post("/cartSubmit", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  rest.get("/getProducts", (req, res, ctx) => {
    return res(
      ctx.status(200), ctx.json({
        "isSuccess": "true",
        "data": [
          {
          "idProduct": "1",
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
        },
        {
          "idProduct": "2",
          "label": "Бесплатный офлайн курс",
          "productName": "«Project manager»",
          "category": [
              "Бэкенд-разработка"
          ],
          "imageSrc": "/images/course-image.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "idProduct": "3",
          "label": "Бесплатный офлайн курс",
          "productName": "«Backend-разработчик»",
          "category": [
              "Управление разработкой"
          ],
          "imageSrc": "/images/course-image.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "idProduct": "4",
          "label": "Бесплатный офлайн курс",
          "productName": "«Аналитик»",
          "category": [
              "Анализ данных"
          ],
          "imageSrc": "/images/course-image.png",
          "registration": {
                  "startDate": "298347302984",
                  "endDate": "239847320984"
          },
          "startCourse": "2389047320",
          "price": 10000,
          "isPopular": true
        },
        {
          "idProduct": "5",
          "label": "Бесплатный офлайн курс",
          "productName": "«Инфраструктура/Администрирование»",
          "category": [
              "IT-инфраструктура"
          ],
          "imageSrc": "/images/course-image.png",
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
  }),
]