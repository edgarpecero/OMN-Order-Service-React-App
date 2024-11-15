import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Customer, Order } from "./OrderPage.types";
import { dateFormatter, formatValue } from "../../shared/componets/datagrid/DataGrid.utils";
import { Chip } from "@mui/material";
import OrderChip from "./components/orderstatuschip/OrderStatusChip";
import { formatToPrice } from "../../shared/componets/utils";
import { FieldErrors, FieldValues } from "react-hook-form";

export enum OrderOperation {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
};

export const renderCashdrawerStatus = (params: GridRenderCellParams) => (
  <OrderChip status={params.value} />
);

export const columns: GridColDef<Order>[] = [
  { field: 'tableIndex', headerName: 'ID', width: 40 },
  {
    field: 'orderId',
    headerName: 'Order ID',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: renderCashdrawerStatus
  },
  {
    field: 'customer',
    headerName: 'Customer Name',
    flex: 1,
    editable: true,
    valueFormatter: (value: Customer) => formatValue(value?.name)
  },
  {
    field: 'totalAmount',
    headerName: 'Total Amount',
    type: 'number',
    width: 150,
    valueFormatter: (value) => formatToPrice(value)
  },
  {
    field: 'created',
    headerName: 'Created',
    type: 'date',
    width: 120,
    valueFormatter: (date: string) => dateFormatter(date),
  },
];

export const getCustomerInputs =
  (errors: FieldErrors<FieldValues>, editMode: boolean = false) => (
    [
      {
        label: 'Name',
        name: 'name',
        error: errors.name,
      },
      {
        label: 'Email',
        name: 'email',
        error: errors.email,
      },
      ...(editMode ? [
        {
          label: 'Order ID',
          name: 'orderId',
          error: errors.orderId,
        },
        {
          label: 'Status',
          name: 'status',
          error: errors.status,
        },
        {
          label: 'Customer ID',
          name: 'customer.customerId',
          error: errors.customerId,
        },
        {
          label: 'Customer Name',
          name: 'customer.name',
          error: errors.customerName,
        },
        {
          label: 'Customer Email',
          name: 'customer.email',
          error: errors.customerEmail,
        },
        {
          label: 'Total Amount',
          name: 'totalAmount',
          error: errors.totalAmount,
        },
        {
          label: 'Created',
          name: 'created',
          error: errors.created,
        },
        {
          label: 'Modified',
          name: 'modified',
          error: errors.modified,
        }
      ] : [])
    ]
  );
