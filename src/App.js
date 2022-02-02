import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
// importing routes
import { Login, Register, NotFound } from "./screens/routes";
import {
  AdminDashboard,
  DealerRequest,
  NewOrders,
  AllDealers,
  History,
  ProductPanel,
  Aprocess,
  AdminProcess,
  DealerDetails,
  OrderDetails,TransactionDetail
} from "./screens/admin/adminRoutes";
import {
  UserDashboard,
  Purchase,
  Transaction,
  Uorder,
  Uprocessing,Ucomplete,Tabel,Process,Complete
} from "./screens/user/userRoutes";
import setTitle from "./assets/header/setTitle";

import PrivateRoute from './assets/header/PrivateRoute'
import ProtectedRoute from './assets/header/ProductedRoute'

function App() {
  let location = useLocation();
  useEffect(() => {
    setTitle(location);
  },[location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/user-dashboard/order/data" element={<PrivateRoute><Tabel /></PrivateRoute>} />
        <Route path="/user-dashboard/pending" element={<PrivateRoute><Process /></PrivateRoute>} />
        <Route path="/user-dashboard/complete/cdata" element={<PrivateRoute><Complete /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard/transaction/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/admin-dashboard/process" element={<ProtectedRoute><AdminProcess /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
          <Route path="dealer-request" element={<ProtectedRoute><DealerRequest /></ProtectedRoute>} />
          <Route path="transaction" element={<ProtectedRoute><TransactionDetail/></ProtectedRoute>} />
          <Route path="all-dealers" element={<ProtectedRoute><AllDealers /></ProtectedRoute>}>
            <Route path=":id" element={<ProtectedRoute><DealerDetails /></ProtectedRoute>} />
            <Route path="aprocess" element={<ProtectedRoute><Aprocess/></ProtectedRoute>} />
          </Route>
          
          <Route path="new-orders" element={<ProtectedRoute><NewOrders /></ProtectedRoute>} >
          <Route path=":id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
          
         
          
            </Route>
          <Route path="product-panel" element={<ProtectedRoute><ProductPanel /></ProtectedRoute>} />
        </Route>
        <Route path="/user-dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>}>
          <Route path="purchase" element={<PrivateRoute><Purchase /></PrivateRoute>} />
          <Route path="transaction" element={<PrivateRoute><Transaction /></PrivateRoute>} />
          <Route path="order" element={<PrivateRoute><Uorder /></PrivateRoute>} >
         
          </Route>
         
          <Route path="process" element={<PrivateRoute><Uprocessing /></PrivateRoute>} />
          <Route path="complete" element={<PrivateRoute><Ucomplete /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
