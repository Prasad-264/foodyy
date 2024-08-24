import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-bar">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
            alt="restaurent logo"
          />
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;