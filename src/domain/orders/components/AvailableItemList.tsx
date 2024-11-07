import { Box } from "@mui/material";
import { useOrderContext } from "../context/OrderContext";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useCallback } from "react";
import { LineItem } from "../Orders.types";

const AvailableItemsList = () => {
  const { availableItems, setSelectedItems } = useOrderContext();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Item Name", width: 400 },
    { field: "quantity", headerName: "Quantity", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
  ];

  const handleRowSelection = useCallback((selectionModel: GridRowSelectionModel) => {
    const selectedData = availableItems.filter((item: LineItem) => selectionModel.includes(item.id));
    setSelectedItems(selectedData);
  }, [setSelectedItems]);

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        onRowSelectionModelChange={handleRowSelection}
        rows={availableItems}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default AvailableItemsList;