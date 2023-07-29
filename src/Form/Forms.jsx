import { Box, Button, TextField, Typography } from '@mui/material'
// import React from 'react'
import SelectsComp from './SelectsComp'
import * as React from 'react';



const Forms = () => {
return (
    <Box sx={{p:'30px', display:'flex', flexDirection:'column', gap:'20px'}}>
        <Typography variant="h1" color="white" sx={{fontWeight:'bold', fontSize:'40px', textAlign:'center', marginBottom:'15px'}}>Add New Budget</Typography>
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <TextField id="filled-basic" label="Title" variant="filled" sx={{bgcolor:'white'}}/>
        </Box>

        <Box sx={{display:'flex', flexDirection:'column'}}>
            <TextField id="filled-basic" label="Amount" variant="filled" sx={{bgcolor:'white'}}/>
        </Box>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <SelectsComp title="Type" optionOne='income' optionTwo='expense' optionThree='data' />
                <SelectsComp title='Catagories' optionOne='select catagories' optionTwo='select catagories' optionThree='select catagories' />
            </Box>


            
            <TextField type='date' variant="filled" sx={{bgcolor:'white'}} />

            
        <Button variant="outlined" sx={{bgcolor:'white', color:'#bbb'}}>Save</Button>
    </Box>
)
}

export default Forms