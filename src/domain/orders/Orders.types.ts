import { OrderStatus } from "./Orders.enum";

// Define the type for LineItem with optional properties
export interface LineItem {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
}

// Define the type for Customer with optional properties
export interface Customer {
  id?: string;
  name?: string;
  email?: string;
}

// Define the main Order type with optional properties
export interface Order {
  id?: string;
  orderId?: string;
  status?: OrderStatus; 
  lineItems?: LineItem[];
  customer?: Customer;
  totalAmount?: number;
  created?: string; 
  modified?: string; 
}
