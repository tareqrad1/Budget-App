import React, { useContext, useEffect } from 'react'
import TransHeader from './TransHeader'
import SingleTrans from './SingleTrans'
import { TransContext } from '../../../context/TransactionContext';
import Typography from '@mui/material/Typography'
import { Box, CircularProgress } from '@mui/material';

const TransContent = () => {
  const {receiveData, loading, error} = useContext(TransContext);
  console.log(receiveData, loading, error);
  return (
    <>
      <TransHeader />
      {
        receiveData.map((eleData) => {
          return (
            <SingleTrans eleData={eleData} key={eleData.id} />
          )
        })
      }
      {loading && (
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography variant="h1" color="Red" sx={{display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'900'}}>Please Try Again Later</Typography>
      )
      }
    </>
  )
}

export default TransContent