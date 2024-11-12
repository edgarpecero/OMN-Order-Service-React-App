import axios from 'axios';
import { Order } from '../OrderPage.types';

const path = process.env.REACT_APP_ORDER_SERVICE_API_URL as string;

export const useCreateNewOrder = () => {
    const createOrder = async (payload: Order) => {
        try {
            const response = await axios.post(path, payload);
            return response.data; // or any other handling needed
        } catch (error) {
            throw error; // re-throw for further handling if needed
        }
    }

    return {
        createNewOrder: (payload: Order) => createOrder(payload)
    }
}

export const useDeleteOrder = () => {
    const deleteOrder = async (id?: string) => {
        const getPath = () => path + (id ? `/${id}` : '');
        try {
            await axios.delete(getPath());
        } catch (error) {
            throw error; // re-throw for further handling if needed
        }
    }

    return {
        deleteOrder: (id?: string) => deleteOrder(id)
    }
}