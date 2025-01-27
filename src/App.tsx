import './App.css';
import Orders from './domain/orders/OrderPage';
import Layout from './shared/componets/layout/Layout';
import { SnackbarProvider } from './shared/context/snackbar/Snackbar';

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Layout title={`Order Management`}>
          <Orders />
        </Layout>
      </SnackbarProvider>
    </div>
  );
}

export default App;
