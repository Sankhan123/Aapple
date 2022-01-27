import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
// importing routes
import { Login, Register, NotFound } from "./screens/routes";
import {
  AdminDashboard,
  DealerRequest,
  NewOrders,
  AllDealers,
  ProductPanel,
  DealerDetails,
} from "./screens/admin/adminRoutes";
import {
  UserDashboard,
  Purchase,
  Transaction,
} from "./screens/user/userRoutes";
import setTitle from "./assets/header/setTitle";

function App() {
  let location = useLocation();
  useEffect(() => {
    setTitle(location);
  },[location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
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
  );
}

export default App;
