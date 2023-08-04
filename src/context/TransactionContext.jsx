/* eslint-disable eqeqeq */
import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { deleteTransaction, getTransaction } from '../Api/Transactions.api';

export const TransContext = createContext(); // used this with useContext and wrap the function Component
// START FUNCTION
function reducerFunction(state, action) {
  switch(action.type) {
    case 'FETCH_START':
      return { ...state, loading:true, error:null }

      case 'FETCH_SUCCESS':  // when api is success loading
        return { ...state, loading:false, receiveData:action.payload } // payload have a value 

      case 'FETCH_ERROR': 
        return { ...state, loading:false, error:action.payload }

      case 'FETCH_STOP': 
        return { ...state, loading:false }

      default:
        return state
  }
}
// END FUNCTION

const TransactionContext = ({children}) => {
  const initState = { 
    receiveData: [],
    loading: false,
    error: null
  }
  const [state, dispatch] = useReducer(reducerFunction, initState); //Start The Hook
  const isMount = useRef(false);
  const [filter] = useState({
    category: null,
  })
  
  const fetchApiData = useCallback(async () => {
    dispatch({type:'FETCH_START'})
    try {
      const Data = await getTransaction()
      dispatch({type:'FETCH_SUCCESS', payload: Data}) // Data comes from api 
    } catch (error) {
      dispatch({type:'FETCH_ERROR', payload: error.message})
      dispatch({type:'FETCH_STOP'})
    }
  }, [])
  
  // useEffect for fetchApiData
  useEffect(() => {
    if(!isMount.current) {
      fetchApiData();
      isMount.current = true; // we call the function once time 
    }
  },[fetchApiData])

  /* deleting functions */
  const deleteApiData = async (id) => {
    try {
      dispatch({type:'FETCH_START'})
      await deleteTransaction(id);
      fetchApiData()
    } catch (error) {
      dispatch({type:'FETCH_ERROR', payload: error.message})
    }
  }

  // start the total function 
  const total = useMemo(() => {
    let income = 0;
    let expanse = 0;
      state.receiveData.forEach((ele) => {
        
        if(ele.type == 'income') {
          income += Number(ele.amount)
        }else {
          expanse += +ele.amount
        }
      })

    return {
      income, expanse , total: income + expanse
    }

  },[state.receiveData]) // because if change receiveData we change the function and render data

  console.log(filter);
  return (
    <TransContext.Provider value={{ ...state, deleteApiData, fetchApiData, total }}>
        {children}
    </TransContext.Provider>
  )
}

export default TransactionContext