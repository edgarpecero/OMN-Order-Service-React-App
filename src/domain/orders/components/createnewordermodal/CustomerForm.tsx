import { useFormContext } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
import { getCustomerInputs } from '../../OrderPage.utils';

const CustomerForm = ({ editMode }: { editMode?: boolean }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', mt: 2, mb: 2 }}>
      {getCustomerInputs(errors, editMode).map(({ label, name, error }) => (
        <TextField
          key={name}
          label={label}
          {...register(name)}
          error={!!error}
          fullWidth
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default CustomerForm;
