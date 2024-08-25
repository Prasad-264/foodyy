import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const handleLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <div className="header">
      <div className="nav-bar">
        <div>
          <img className="logo" src={LOGO_URL} alt="restaurent logo" />
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={handleLogin}>
              {login}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
