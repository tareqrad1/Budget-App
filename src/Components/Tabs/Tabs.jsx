import { Box, Button, Container } from '@mui/material'
import React, { useState } from 'react'
import RecipeReviewCard from '../TabsContent/ExpenseBtn/Three'
import HorizontalLinearStepper from '../TabsContent/DataBtn/TransContent'
import ContinuousSlider from '../TabsContent/IncomeBtn/Two'

const Tabs = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <Container sx={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(130px, 1fr))', gap:'10px'}}>
        <Button className={`btnTabs ${value === 1 && 'active'}`} variant="outlined" onClick={() => setValue(1)}>Data</Button>
        <Button className={`btnTabs ${value === 2 && 'active'}`} variant="outlined" onClick={() => setValue(2)}>Income</Button>
        <Button className={`btnTabs ${value === 3 && 'active'}`} variant="outlined" onClick={() => setValue(3)}>Expense</Button>
      </Container>
      <Container>
        <Box sx={{mt:'30px'}} >
          {value === 1 ? (<>{<HorizontalLinearStepper />}</>) : value === 2 ? (<>{<ContinuousSlider />}</>) : (<>{<RecipeReviewCard />}</>) }
        </Box>
      </Container>
    </>
  )
}

export default Tabs