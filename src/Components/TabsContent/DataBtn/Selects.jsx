import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CatContext } from "../../../context/CategoryContext";
import { TransContext } from '../../../context/TransactionContext';


function Selects(props) {
  const {data} = React.useContext(CatContext)

  return (
    <Box sx={{ minWidth: 120, textAlign:'center', bgcolor:'#454747', outline:'none' }}>
      <FormControl fullWidth sx={{outline:'none'}}>
        <InputLabel id="demo-simple-select-label" sx={{color:'white'}}>{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='category'
          label="Age"
        >
          {data.map((ele) => {
            return (
              <MenuItem key={ele.id}>{ele.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Selects