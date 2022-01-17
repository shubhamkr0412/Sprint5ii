import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginError, loginSuccess } from "../store/auth/actions";

export const Login = () => {
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
        type="text"
        placeholder="Enter Email"
        onChange={(e) => (loginData.current.email = e.target.value)}
      ></input>
      <p className="inputTitle"> Enter Password :</p>
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e) => (loginData.current.password = e.target.value)}
      ></input>
      <br></br>
      <button
        onClick={() => {
          if (
            loginData.current.email === "user_shubham@gmail.com" &&
            loginData.current.password === "user_shubham@"
          ) {
            dispatch(loginSuccess(true));
          } else {
            dispatch(loginError(false));
          }
        }}
      >
        Login
      </button>

      {error ? <p>Invalid Login Credentials</p> : null}

      <p>
        <Link to="/admin/login">Are you a Admin? click here.</Link>
      </p>

      <p>
        Fake Login Details:
        <br></br>
        Email: user_saurabh@gmail.com
        <br></br>
        Password: user_saurabh@123
      </p>
    </div>
  );
};
