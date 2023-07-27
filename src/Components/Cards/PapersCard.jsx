import { Box, Typography } from '@mui/material'
import React from 'react'
const PaperCard = ({ ele }) => {
  return (
    <Box bgcolor={ele.bgBox} sx={{borderRadius:'4px', marginTop:'-130px', padding:"3rem 1rem", color:'white', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <h1>{ele.Icons}</h1>
        <Typography variant="h2" fontWeight='bold' mb='10px'>{ele.totalPrice}</Typography>
        <Typography variant="p">{ele.name}</Typography>
    </Box>
  )
}

export default PaperCard