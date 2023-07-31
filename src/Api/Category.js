import axiosApi from "./AxiosApi";

export const getCategory = async () => {
    const { data } = await axiosApi.get('/categories')
    return data
}