import axiosApi from './AxiosApi'
export const getTransaction = async () => {
    const {data} = await axiosApi.get('/transactions')
    return data
}