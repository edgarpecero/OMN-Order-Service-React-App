import { Grid2, Typography } from '@mui/material';
import { formatToPrice } from '../../../../shared/componets/utils';

const TotalAmoutLabel = ({ totalAmount }: { totalAmount: number }) => {

  return (
    <Grid2 container mt={2}>
      <Grid2 size={9} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant={'h4'} gutterBottom >
          {'Total Amount:'}
        </Typography>
      </Grid2>
      <Grid2 size={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant={'h4'} gutterBottom>
          {formatToPrice(totalAmount)}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default TotalAmoutLabel;