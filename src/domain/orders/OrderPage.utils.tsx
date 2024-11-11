import { GridColDef } from "@mui/x-data-grid";
import { Customer, Order } from "./OrderPage.types";
import { dateFormatter, formatValue } from "../../shared/componets/datagrid/DataGrid.utils";

export enum OrderOperation {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
};

export const columns: GridColDef<Order>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'orderId',
    headerName: 'Order ID',
    flex: 1
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1
  },
  {
    field: 'customer',
    headerName: 'Customer Name',
    flex: 1,
    valueFormatter: (value: Customer) => {
      return formatValue(value?.name);
    },
  },
  {
    field: 'totalAmount',
    headerName: 'Total Amount',
    type: 'number',
    flex: 1
  },
  {
    field: 'created',
    headerName: 'Created',
    type: 'date',
    flex: 1,
    valueFormatter: (date: string) => dateFormatter(date),
  },
  {
    field: 'modified',
    headerName: 'Modified',
    type: 'date',
    flex: 1,
    valueFormatter: (date: string) => dateFormatter(date),
  }
];
