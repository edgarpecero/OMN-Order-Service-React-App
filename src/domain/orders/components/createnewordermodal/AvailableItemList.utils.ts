import { GridColDef } from "@mui/x-data-grid";
import { LineItem } from "../../OrderPage.types";
import { formatToPrice } from "../../../../shared/componets/utils";

export const containerStyle = {
  height: 420,
  width: '100%',
  '& .super-app-light-blue': {
    backgroundColor: '#E0F7FA', // Lighter blue background for cells (quantity column)
    color: '#1a3e72',            // Dark text color for contrast
  },
};

export const columns: GridColDef<LineItem>[] = [
  {
    field: "name",
    headerName: "Item Name",
    flex: 1,
  },
  { 
    field: "price", 
    headerName: "Price", 
    width: 120,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value) => formatToPrice(value)
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: 'number',
    editable: true,
    align: 'center',
    headerAlign: 'center',
    cellClassName: 'super-app-light-blue', // Custom class for the cell
    width: 100
  },
];