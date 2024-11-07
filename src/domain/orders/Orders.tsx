import { useEffect, useState } from "react";
import DataGrid from "../../shared/componets/datagrid/DataGrid"
import { Box, Button } from "@mui/material";
import CreateNewOrderModal from "./components/CreateNewOrderModal";
import { OrderProvider, useOrderContext } from "./context/OrderContext";

const Orders = () => {
  const [isCreateNewOrderModalOpen, setCreateNewOrderModalOpen] = useState<boolean>(false);
  const { orderList } = useOrderContext();

  const handleOpenCreateNewOrderModal = () => {
    setCreateNewOrderModalOpen(true);
  };

  return (
    <>
      <CreateNewOrderModal
        open={isCreateNewOrderModalOpen}
        onClose={() => setCreateNewOrderModalOpen(false)}
        onConfirm={() => console.log("Create new order")}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="contained" onClick={handleOpenCreateNewOrderModal}>
          Create New Order
        </Button>
      </Box>
      <DataGrid rows={orderList} />
    </>
  );
}

const OrderPage = () => {
  return (
    <OrderProvider>
      <Orders />
    </OrderProvider>
  );
}



export default OrderPage;