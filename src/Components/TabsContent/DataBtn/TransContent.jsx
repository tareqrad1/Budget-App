import React, { useContext } from 'react'
import TransHeader from './TransHeader'
import SingleTrans from './SingleTrans'
import { TransContext } from '../../../context/TransactionContext';
import Typography from '@mui/material/Typography'
import { Box, CircularProgress } from '@mui/material';
import { CatContext } from '../../../context/CategoryContext';

const TransContent = () => {
  const {receiveData, loading, error} = useContext(TransContext);
  const {data, loading:catLoading} = useContext(CatContext);
  return (
    <>
      <TransHeader />
      
      {!loading && receiveData && !error && data.length && !catLoading && (
        receiveData.map((eleData) => {
          return (
            <SingleTrans eleData={eleData} key={eleData.id} data={data} />
          )
        })
      )}
      {loading && catLoading &&(
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
          <CircularProgress />
        </Box>
      )}
      {error && !loading &&(
        <Typography variant="h1" color="Red" sx={{display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'900', marginTop:'50px'}}>Please Try Again Later</Typography>
      )
      }
      {receiveData && !receiveData.length && !loading && !error && (
        <Typography variant="p" color="green" sx={{display:'flex', justifyContent:'center'}}>No Data</Typography>
      )}
    </>
  )
}

export default TransContent