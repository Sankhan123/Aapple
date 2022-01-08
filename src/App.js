import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
