import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { TransContext } from '../../../context/TransactionContext';

export default function RecipeReviewCard() {
  const {total} = React.useContext(TransContext);
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 1, value: total.expanse, label: 'Expanse' },
            { id: 2, value: total.total, label: 'Total' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}