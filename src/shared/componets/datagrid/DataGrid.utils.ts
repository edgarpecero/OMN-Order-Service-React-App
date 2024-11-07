import { GridColDef, GridRowParams } from "@mui/x-data-grid";
import { Customer, Order } from "../../../domain/orders/Orders.types";

// The formatValue function will handle missing or invalid values
const formatValue = (value: any) => {
  return value ? value : '-';
};

const dateFormatter = (value: string | undefined): string => {
  if (!value) return '-';
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const columns: GridColDef<Order>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'orderId',
    headerName: 'Order ID',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
  {
    field: 'customer',
    headerName: 'Customer Name',
    width: 200,
    valueFormatter: (value: Customer) => {
      return formatValue(value?.name);
    },
  },
  {
    field: 'totalAmount',
    headerName: 'Total Amount',
    type: 'number',
    width: 150,
  },
  {
    field: 'created',
    headerName: 'Created',
    type: 'date',
    width: 200,
    valueFormatter: (date: string) => dateFormatter(date),
  },
  {
    field: 'modified',
    headerName: 'Modified',
    type: 'date',
    width: 200,
    valueFormatter: (date: string) => dateFormatter(date),
  }
];
