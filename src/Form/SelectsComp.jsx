// import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
// import React, { useContext } from 'react'
// import { CatContext } from '../context/CategoryContext';

// const SelectsComp = ({title, optionThree, optionTwo, optionOne}) => {
//     const [age, setAge] = React.useState('');
//     const handleChange = (event) => {
//         setAge(event.target.value);
//     };
//     const { data, loading, error } = useContext(CatContext);
//     console.log(data,loading);

//   return (
//      <Box sx={{width:'270px' }}>
//         <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">{title}</InputLabel>
//             <Select
//             sx={{bgcolor:'white'}}
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={age}
//             label="Age"
//             onChange={handleChange}
//             >
//             {data && !loading && (
//               data.map((categoryEle) => {
//                 return (
//                     <MenuItem key={categoryEle.id} value={categoryEle.id}>{categoryEle.name}</MenuItem>
//                 )
//               })
//             )}
//             {error && !loading && (
//               <Typography variant='p' sx={{textAlign:'center'}}>error please try later</Typography>
//             )}
//             </Select>
//         </FormControl>
//     </Box>
//   )
// }

// export default SelectsComp