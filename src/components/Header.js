import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const handleLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="border border-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <img className="w-32 h-28" src={LOGO_URL} alt="restaurent logo" />
        </div>
        <div className="">
          <ul className="flex items-center space-x-8 text-md font-semibold text-gray-600 hover:text-gray-800">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-600 hover:text-gray-800">
                Cart ({cartItems.length} items)
              </Link>
            </li>
            <button
              className="w-20 px-4 py-2 bg-gray-300 rounded-md text-center hover:bg-gray-400"
              onClick={handleLogin}
            >
              {login}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
