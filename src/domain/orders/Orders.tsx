import { useEffect, useState } from "react";
import DataGrid from "../../shared/componets/datagrid/DataGrid"
import { Order } from "./Orders.types";
import axios from "axios";

const Orders = () => {
  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        const data = response?.data?.orders;
        if (data) {
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetch();
  }, []);

  return (
    <DataGrid rows={data} />
  );
}

export default Orders;