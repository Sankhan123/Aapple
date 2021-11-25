import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DealerRequest from "./components/DealerRequest";
import NewOrders from "./components/NewOrders";
import AllOrders from "./components/AllOrders";
import ProductPanel from "./components/ProductPanel";

function App() {
  return (
    <Router>
      <>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dealer-request" element={<DealerRequest />} />
          <Route path="new-orders" element={<NewOrders />} />
          <Route path="all-orders" element={<AllOrders />} />
          <Route path="product-panel" element={<ProductPanel />} />
        </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
