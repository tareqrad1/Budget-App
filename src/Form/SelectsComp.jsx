import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

const SelectsComp = ({title, optionThree, optionTwo, optionOne}) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };


  return (
     <Box sx={{width:'270px' }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
            sx={{bgcolor:'white'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={optionOne}>{optionOne}</MenuItem>
            <MenuItem value={optionTwo}>{optionTwo}</MenuItem>
            <MenuItem value={optionThree}>{optionThree}</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectsComp