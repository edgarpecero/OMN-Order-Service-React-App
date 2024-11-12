import React, { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import axios from "axios";
import { LineItem, Order } from '../OrderPage.types';
import { lineItems } from '../../../shared/constants/constanst';
import { AlertSeverity, useSnackbar } from '../../../shared/context/snackbar/Snackbar';
import { OrderOperation } from '../OrderPage.utils';

interface OrderContextProps {
  selectedItems: LineItem[];
  availableItems: LineItem[];
  ordersData: Order[];
  isCreateNewOrderModalOpen: boolean;
  setOrdersData: Dispatch<SetStateAction<Order[]>>;
  setSelectedItems: Dispatch<SetStateAction<LineItem[]>>;
  handleRefresh: () => void;
  resetSelection: () => void;
  handleOrderSnackbar: (op: OrderOperation, success: boolean) => void;
  isCreateOrderModalOpen: (open?: boolean) => void;
};

const OrderContext = createContext({} as OrderContextProps);

export const OrderProvider = React.memo(({ children }: {
  children?: React.ReactNode;
}) => {
  const orderContext = useOrderProvider();
  return <OrderContext.Provider value={orderContext}>{children}</OrderContext.Provider>;
});

// Custom hook for consuming the context
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

const useOrderProvider = (): OrderContextProps => {
  const [isCreateNewOrderModalOpen, setCreateNewOrderModalOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<LineItem[]>([]);
  const [availableItems, setAvailableItems] = useState<LineItem[]>(lineItems);
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const [refresh, setRefresh] = useState(false);
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        const ordersData = response?.data?.orders;
        if (ordersData) {
          setOrdersData(ordersData.map((order: Order, index: number) => ({ ...order, tableIndex: index + 1 })));
        }
      } catch (error) {
        openSnackbar("Failed to fetch orders!", AlertSeverity.Error);
      }
    }

    fetch();
  }, [refresh]);

  const resetSelection = () => {
    setSelectedItems([])
    setAvailableItems(prev => prev.map(item => ({ ...item, quantity: 0 })));
  };

  const handleRefresh = () => setRefresh(prev => !prev);

  const handleOrderSnackbar = (op: OrderOperation, success: boolean) => {
    let successMessage;
    switch (op) {
      case OrderOperation.DELETE:
        successMessage = 'Order has been canceled!';
        break;
      default:
        successMessage = 'Order placed! A confirmation email has been sent to your inbox!';
    }
    const message = success ? successMessage : `Failed to ${op.toLowerCase()} order!`;
    const severity = success ? AlertSeverity.Success : AlertSeverity.Error;
    openSnackbar(message, severity);
  };

  const modalActions = {
    open: () => setCreateNewOrderModalOpen(true),
    close: () => setCreateNewOrderModalOpen(false),
  };

  const isCreateOrderModalOpen = useCallback((open?: boolean) => {
    const action = open ? 'open' : 'close';
    modalActions[action]();
  }, []);

  return {
    availableItems,
    ordersData,
    selectedItems,
    isCreateNewOrderModalOpen,
    setSelectedItems,
    handleRefresh,
    setOrdersData,
    resetSelection,
    isCreateOrderModalOpen,
    handleOrderSnackbar
  };
};
