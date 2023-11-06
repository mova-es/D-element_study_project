// const getData = url => {
//     return fetch(url).then(response => {
//         if(response.isSuccess) {
//             return response.json()
//         }
//         throw `Что-то пошло не так, ошибка ${response.status}`
//     })
//     .catch(err => console.error(err))
// }

// export const GetDataFromServer = async () => {
//     return await getData("/catalog")
// }