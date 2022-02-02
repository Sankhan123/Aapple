import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  let Navi = useNavigate();
  let auth,
    role = null;
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  if (sessionStorage.getItem("user") !== null) {
    auth = JSON.parse(sessionStorage.getItem("user"));
    if (auth) {
      const decodedJwt = parseJwt(auth.token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        Navi("/login");
      }
    }
    role = auth.user.user_role;
  }
  useEffect(() => {
    if (!auth || !(role === "admin")) {
      alert("You are not admin!!!");
    }
  }, []);
  return auth && role === "admin" ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
