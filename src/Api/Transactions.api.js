import axiosApi from './AxiosApi'

export const getTransaction = async () => {
    const {data} = await axiosApi.get('/transactions')
    return data
}

export const deleteTransaction = async (id) => {
    const {data} = await axiosApi.delete('/transactions/'+id)
    return data
}