import { useCallback, useMemo } from "react";
import DataGrid from "../../shared/componets/datagrid/DataGrid"
import { Box, Button } from "@mui/material";
import CreateNewOrderModal from "./components/createnewordermodal/CreateNewOrderModal";
import { OrderProvider, useOrderContext } from "./context/OrderContext";
import RefreshIcon from "../../shared/componets/Icons/RefreshIcon";
import { columns, OrderOperation } from "./OrderPage.utils";
import { useDeleteOrder } from "./hooks/useOrders";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteRowIcon from "../../shared/componets/Icons/DeleteRowIcon";
import { OrderStatus } from "./OrderPage.enum";

const Orders = () => {
  const {
    ordersData,
    handleRefresh,
    handleOrderSnackbar,
    setOrdersData,
    isCreateNewOrderModalOpen,
    isCreateOrderModalOpen,
    resetSelection,
  } = useOrderContext();
  const { deleteOrder } = useDeleteOrder();

  const renderDeleteCell = useCallback((params: GridRenderCellParams) => {
    const onDelete = async (e: React.MouseEvent) => {
      e.stopPropagation();
      try {
        await deleteOrder(params.row.id);
        handleOrderSnackbar(OrderOperation.DELETE, true);
        handleRefresh();
      } catch (error) {
        handleOrderSnackbar(OrderOperation.DELETE, false);
      }
    };
    return (
      <DeleteRowIcon
        onDelete={onDelete}
        isDeleted={params?.row?.status === OrderStatus.CANCELLED}
      />
    );
  }, [deleteOrder, handleOrderSnackbar, setOrdersData, handleRefresh]);

  const columnsWithDelete = useMemo<GridColDef[]>(() => [
    ...columns,
    {
      field: 'actions',
      headerName: '',
      sortable: false,
      align: 'right',
      maxWidth: 60,
      renderCell: renderDeleteCell,
    },
  ], [columns, renderDeleteCell]);

  // Memoize row data to prevent unnecessary recalculations (e.g., when state changes frequently)
  const rows = useMemo(() => ordersData, [ordersData]);

  return (
    <>
      <CreateNewOrderModal
        open={isCreateNewOrderModalOpen}
        onClose={() => isCreateOrderModalOpen(false)}
        onReset={resetSelection}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <RefreshIcon onRefresh={handleRefresh} />
        <Button sx={{ ml: 2 }} variant="contained" onClick={() => isCreateOrderModalOpen(true)}>
          Create New Order
        </Button>
      </Box>
      <DataGrid rows={rows} columns={columnsWithDelete} />
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