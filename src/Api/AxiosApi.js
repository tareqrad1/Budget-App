import axios from 'axios'
//custom hook api
const ApiUrl = 'http://localhost:9000'

const axiosApi = axios.create({
    baseURL: ApiUrl,
})

export default axiosApi;
