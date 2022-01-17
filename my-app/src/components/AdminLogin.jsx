import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { adminLoginSuccess, loginError } from "../store/auth/actions";

export const AdminLogin = () => {
  const loginData = useRef({ email: "", password: "" });
  const dispatch = useDispatch();

  const { isAuth, error } = useSelector((state) => ({
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error,
  }));

  console.log(isAuth);

  if (isAuth) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="inputDiv">
      <p className="inputTitle">Enter Email :</p>
      <input
        placeholder="Enter Email"
        onChange={(e) => (loginData.current.email = e.target.value)}
      ></input>
      <p className="inputTitle"> Enter Password :</p>
      <input
        placeholder="Enter Password"
        onChange={(e) => (loginData.current.password = e.target.value)}
      ></input>
      <br></br>
      <button
        onClick={() => {
          if (
            loginData.current.email === "shubham35godda@gmail.com" &&
            loginData.current.password === "admin_shubham@50"
          ) {
            dispatch(adminLoginSuccess(true));
          } else {
            dispatch(loginError(false));
          }
        }}
      >
        Login
      </button>

      {error ? <p>Invalid Login Credentials</p> : null}

      <p>
        <Link to="/login">Are you a User? click here.</Link>
      </p>

      <p>
        Fake Login Details:
        <br></br>
        Email: admin_saurabh@gmail.com
        <br></br>
        Password: admin_saurabh@123
      </p>
    </div>
  );
};
