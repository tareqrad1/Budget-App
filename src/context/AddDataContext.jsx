import React, { createContext, useContext } from 'react'
import axiosApi from '../Api/AxiosApi';
import { TransContext } from './TransactionContext';
export const AddContext = createContext();


const AddDataContext = ({children}) => {
    const {fetchApiData} = useContext(TransContext)
    let arr = ['income', 'expance'];

    const postApi = async (post) => {
        const params = {
            title: post.title,
            amount: post.amount ,
            type: arr[Math.floor(Math.random() * 3)] , //once expanse one income
            category: post.category,
            date: post.date
        }
        await axiosApi.post('/transactions',params)
        fetchApiData()
    }
  return (
    <AddContext.Provider value={{postApi}}>
        {children}
    </AddContext.Provider>
  )
}

export default AddDataContext