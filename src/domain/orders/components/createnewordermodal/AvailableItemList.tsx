import { Box } from "@mui/material";
import { DataGrid, GridRowModel } from "@mui/x-data-grid";
import { useOrderContext } from "../../context/OrderContext";
import { LineItem } from "../../OrderPage.types";
import { columns, containerStyle } from "./AvailableItemList.utils";

const AvailableItemsList = () => {
  const { availableItems, setSelectedItems } = useOrderContext();

  const handleRowEdit = (updatedRow: GridRowModel) => {
    const updatedItem = updatedRow as LineItem;

    // Only track changes to the 'quantity' field
    if (updatedItem.quantity !== availableItems.find(item => item.id === updatedItem.id)?.quantity) {
      setSelectedItems((prevItems) => {
        // Check if the item already exists in the state
        const index = prevItems.findIndex(item => item.id === updatedItem.id);

        if (index >= 0) {
          // If the item is already in the list, update it
          const updatedList = [...prevItems];
          updatedList[index] = updatedItem;
          return updatedList;
        } else {
          // If not, add it to the list
          return [...prevItems, updatedItem];
        }
      });
    }

    // Return the updated row so the grid can update
    return updatedItem;
  };

  return (
    <Box sx={containerStyle}>
      <DataGrid
        rows={availableItems}
        columns={columns}
        disableRowSelectionOnClick
        rowHeight={30}
        processRowUpdate={handleRowEdit}
        hideFooter
      />
    </Box>
  );
};

export default AvailableItemsList;