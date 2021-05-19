import axios from 'axios'
const baseUrl = '/api/candidates'

/*Luodaan bäkkäriä varten 2 funktiota
Ensimmäinen funktio hakee kaikki ehdokkaat palvelimelta
Toinen funktio lisää ehdokkaita teitokantaan.
*/

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const put = async updatedObject => {
  console.log(updatedObject)
  const response = await axios.post(baseUrl, updatedObject)
  return response.data
}

export default { getAll, put }