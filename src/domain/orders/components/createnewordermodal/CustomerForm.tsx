import { useFormContext } from 'react-hook-form';
import { TextField, Box } from '@mui/material';

const CustomerForm = () => {
  const { register,  formState: { errors } } = useFormContext();
  const inputs = [
    {
      label: 'Name',
      name: 'name',
      error: errors.name,
    },
    {
      label: 'Email',
      name: 'email',
      error: errors.email,
    }
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', mt: 2, mb: 2 }}>
      {inputs.map(({ label, name, error }) => (
        <TextField
          key={name}
          label={label}
          {...register(name as 'name' | 'email')}
          error={!!error}
          fullWidth
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default CustomerForm;
