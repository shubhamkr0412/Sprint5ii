import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth/actions";
import "./Navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="mainNavbar">
      <div></div>
      <div>
        <Link to="/" className="link">
          Homepage
        </Link>
      </div>
      <div>
        <Link to="/dashboard" className="link">
          Dashboard
        </Link>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(logout(true));
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
