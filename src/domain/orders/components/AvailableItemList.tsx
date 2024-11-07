import { Box, Checkbox, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useOrderContext } from "../context/OrderContext";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const AvailableItemsList = () => {
  const { availableItems, setSelectedItems, selectedItems } = useOrderContext();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Item Name", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={availableItems}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default AvailableItemsList;