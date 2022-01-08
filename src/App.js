import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import DealerRequest from "./components/DealerRequest";
import NewOrders from "./components/NewOrders";
import AllDealers from "./components/AllDealers";
import ProductPanel from "./components/ProductPanel";
import DealerDetails from "./components/DealerDetails";
import NotFound from "./screens/NotFound";

//user dashboard

import UserDashboard from "./screens/userDashboard";
import Purchase from "./components/Purchase";
import Transaction from "./components/Transaction";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="dealer-request" element={<DealerRequest />} />
            <Route path="all-dealers" element={<AllDealers />}>
              <Route path=":id" element={<DealerDetails />} />
            </Route>
            <Route path="new-orders" element={<NewOrders />} />
            <Route path="product-panel" element={<ProductPanel />} />
          </Route>
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route path="purchase" element={<Purchase />} />
            <Route path="transaction" element={<Transaction />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
