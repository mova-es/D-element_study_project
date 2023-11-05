export const ReceivedData = async function GetDataFromServer (path) {
    const response = await fetch(path)
    return response
}