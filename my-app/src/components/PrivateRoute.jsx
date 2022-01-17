import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => ({
    isAuth: state.authReducer.isAuth,
  }));

  if (!isAuth) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};
