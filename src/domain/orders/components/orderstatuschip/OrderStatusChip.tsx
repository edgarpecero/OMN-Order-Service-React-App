import { Chip } from '@mui/material';
import { OrderStatus } from '../../OrderPage.enum';

const OrderChip = ({ status }: { status: OrderStatus }) => {
  // Determine the color variant based on the operation type
  const getVariantColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PROCESSING:
        return 'success';   // Green color for PROCESSING
      case OrderStatus.DELIVERED:
        return 'primary';   // Blue color for DELIVERED
      case OrderStatus.SHIPPED:
        return 'warning';     // Red color for SHIPPED
      case OrderStatus.CANCELLED:
        return 'error';     // Red color for CANCELLED
      default:
        return 'default';   // Default color if no match
    }
  };

  return (
    <Chip
      label={status}
      variant='outlined'
      color={getVariantColor(status)}
    />
  );
};

export default OrderChip;
