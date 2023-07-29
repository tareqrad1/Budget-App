import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Selects(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, textAlign:'center', bgcolor:'#454747', outline:'none' }}>
      <FormControl fullWidth sx={{outline:'none'}}>
        <InputLabel id="demo-simple-select-label" sx={{color:'white'}}>{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={props.optionOne}>{props.optionOne}</MenuItem>
          <MenuItem value={props.optionTwo}>{props.optionTwo}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Selects