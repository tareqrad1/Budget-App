import { Avatar, Box, Typography, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const SingleTrans = () => {
  return (
    <Box className='lists' maxWidth="lg" sx={{mt:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', p:'20px'}}>
      <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
      <Avatar alt="$ Sharp" src="/static/images/avatar/1.jpg" />
      <Box>
        <Typography variant="h5" sx={{fontWeight:'bold', color:'white'}}>Salary</Typography>
        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
            <Typography variant="small" color="#ddd">4000$</Typography>
            <Typography variant="small" color="#ddd">2021-1-01</Typography>
            <Typography variant="small" color="#ddd">Business</Typography>
        </Box>
      </Box>
      </Box>
      <Box>
        <IconButton>
            <EditIcon sx={{color:'#fff', mr:'1px', bgcolor:'#714fda',borderRadius:'50%', width:'30px', height:30}} />
        </IconButton>
        <IconButton>
            <DeleteIcon sx={{color:'#fff', bgcolor:'#b22b6a', borderRadius:'50%', width:'30px', height:30}} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SingleTrans