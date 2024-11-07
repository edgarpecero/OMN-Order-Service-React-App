import React, { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import axios from "axios";
import { LineItem, Order } from '../Orders.types';
import { lineItems } from '../../../shared/constants/constanst';

interface OrderContextProps {
  selectedItems: LineItem[];
  availableItems: LineItem[];
  orderList: Order[];
  setSelectedItems: Dispatch<SetStateAction<LineItem[]>>;
  resetSelection: () => void;
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
  const [selectedItems, setSelectedItems] = useState<LineItem[]>([]);
  const [orderList, setOrderList] = useState<Order[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        const orderList = response?.data?.orders;
        if (orderList) {
          setOrderList(orderList);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetch();
  }, []);

  const resetSelection = () => setSelectedItems([]);

  return {
    availableItems: lineItems,
    orderList,
    selectedItems,
    setSelectedItems,
    resetSelection,
  };
};
