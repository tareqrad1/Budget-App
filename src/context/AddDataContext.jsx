import React, { createContext, useEffect } from 'react'
import axiosApi from '../Api/AxiosApi';
import { TransContext } from './TransactionContext';
export const AddContext = createContext();


const AddDataContext = ({children}) => {
    const {fetchApiData} = React.useContext(TransContext)

    const postApi = async (post) => {
        const params = {
            title: post.title,
            amount: post.amount ,
            type: "income",
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