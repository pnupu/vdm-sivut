import axios from 'axios'
const baseUrl = '/api/memes'

/*Luodaan bäkkäriä varten 2 funktiota
Ensimmäinen funktio hakee kaikki meemit palvelimelta
Toinen funktio päivittää meemejä, eli lisää liken.
*/
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const update = async updatedObject => {
  console.log(updatedObject)
  const url = baseUrl + '/' + updatedObject.id
  const response = await axios.put(url, updatedObject)
  return response.data
}

const put = async updatedObject => {
  const response = await axios.put('/api/candidates', updatedObject)
  return response.data
}

export default { getAll, update, put }