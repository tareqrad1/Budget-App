import React, { createContext, useCallback, useEffect, useReducer, useRef } from 'react'
import { getCategory } from '../Api/Category';
export const CatContext = createContext();


const ReducerFunction = (state, action) => {
  switch(action.type) {
    case 'FETCH_START': 
      return { ...state, loading: true }
    case 'FETCH_SUCCESS': 
        return { ...state, loading:false, data:action.payload }
    case 'FETCH_ERROR':
      return {...state, loading:false, error: action.payload }
    
    default :
      return state
  }
}

const CategoryContext = ({children}) => {
  const initState = {
    data:[],
    loading: false,
    error: null,
  }
  const [state, dispatch] = useReducer(ReducerFunction, initState);
  const isMount = useRef(false);

  const fetchApiCategory = useCallback(async () => {
    dispatch({type:'FETCH_START'})
    try {
      const Data = await getCategory();
      dispatch({type:'FETCH_SUCCESS', payload:Data})
    } catch (error) {
      dispatch({type:'FETCH_ERROR', payload:error.message})
    }
  },[])

  useEffect(() => {
    if(!isMount.current) {
      fetchApiCategory()

      isMount.current = true;
    }
  },[fetchApiCategory])
  return (
    <CatContext.Provider value={{...state}} >
      {children}
    </CatContext.Provider>
  )
}

export default CategoryContext