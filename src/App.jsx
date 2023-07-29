import React, { useContext } from 'react'
import MainLayout from './Layout/MainLayout'
import TransactionContext from './context/TransactionContext'
const App = () => {
  return (
    <>
        <MainLayout />
        <TransactionContext />
    </>
    
  )
}

export default App