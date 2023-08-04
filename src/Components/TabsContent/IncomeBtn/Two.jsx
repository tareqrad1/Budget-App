import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { TransContext } from '../../../context/TransactionContext';

export default function ContinuousSlider() {
  const {total} = React.useContext(TransContext);
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: total.income, label: 'Income' },
            { id: 2, value: total.total, label: 'Total' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}