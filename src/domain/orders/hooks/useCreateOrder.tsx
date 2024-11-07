import axios from 'axios';
import { LineItem } from '../Orders.types';

export const useCreateNewOrder = () => {
    const path = 'http://localhost:5009/orders';
    
    const createOrder = async (selectedItems: LineItem[]) => {
        try {
            const payload = { lineItems: selectedItems }
            const response = await axios.post(path, payload);
            console.log('POST response:', response.data);
            return response.data; // or any other handling needed
        } catch (error) {
            console.error('Error posting selected rows:', error);
            throw error; // re-throw for further handling if needed
        }
    }

    return {
        createNewOrder: (selectedItems: LineItem[]) => createOrder(selectedItems)
    }
}