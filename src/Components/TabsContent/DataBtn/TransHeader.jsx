import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Selects from './Selects';
const TransHeader = () => {
  
  return (
    <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', flexWrap:'wrap', color:'white', mb:'40px'}}>
        <Typography variant="h1" sx={{fontWeight:'bold', fontSize:'24px'}}>Recent Transactions</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', gap:'10px'}}>
            <Selects name= 'categories' />
        </Box>
    </Box>
  )
}

export default TransHeader