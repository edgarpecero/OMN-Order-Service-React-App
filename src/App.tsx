import './App.css';
import Orders from './domain/orders/Orders';
import Layout from './shared/componets/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout title={`Edgar's Order Management App`}>
        <Orders />
      </Layout>
    </div>
  );
}

export default App;
