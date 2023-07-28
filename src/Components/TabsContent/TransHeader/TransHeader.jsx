import * as React from 'react';
import Typography from '@mui/material/Typography'
// import { Box } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Selects from './Selects';

const TransHeader = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', flexWrap:'wrap', color:'white', mb:'40px'}}>
        <Typography variant="h1" sx={{fontWeight:'bold', fontSize:'24px'}}>Recent Transactions</Typography>
        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', gap:'10px'}}>
            <Selects name='sorted by' optionOne= 'data' optionTwo= 'amount' />
            <Selects name= 'categories' optionOne= 'categories' />
            <Selects name= 'all' optionOne= 'all' />
        </Box>
    </Box>
  )
}

export default TransHeader