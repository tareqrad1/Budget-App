import { Avatar, Box, Typography, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from 'react'
import { TransContext } from '../../../context/TransactionContext';


const SingleTrans = ({eleData}) => {
  const {deleteApiData} = useContext(TransContext);

  return (
    <Box className='lists' maxWidth="lg" sx={{mt:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', p:'20px'}}>
      <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
      <Avatar alt="$ Sharp" src="/static/images/avatar/1.jpg" />
      <Box>
        <Typography variant="h5" sx={{fontWeight:'bold', color:'white'}}>{eleData.title}</Typography>
        <Box sx={{display:'flex', alignItems:'center', gap:'5px'}}>
            <Typography variant="small" color="#ddd">{eleData.amount}$</Typography>
            <Typography variant="small" color="#ddd">{eleData.date}</Typography>
            <Typography variant="small" color="#ddd">{eleData.type}</Typography>
        </Box>
      </Box>
      </Box>
      <Box>
        <IconButton>
            <EditIcon sx={{color:'#fff', mr:'1px', bgcolor:'#714fda',borderRadius:'50%', width:'30px', height:30}} />
        </IconButton>
        <IconButton onClick={() => deleteApiData(eleData.id)}>
            <DeleteIcon sx={{color:'#fff', bgcolor:'#b22b6a', borderRadius:'50%', width:'30px', height:30}} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SingleTrans