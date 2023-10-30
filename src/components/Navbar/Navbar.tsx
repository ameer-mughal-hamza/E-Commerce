import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="wrapper">
          <div className="navbar__links">
            <ul className="navbar__links">
              <li className="navbar__link">
                <p className="country__name">
                  USA <KeyboardArrowDownIcon />
                </p>
              </li>
              <li className="navbar__link">
                <Link to="">Men</Link>
              </li>
              <li className="navbar__link">
                <Link to="">Women</Link>
              </li>
              <li className="navbar__link">
                <Link to="">Children</Link>
              </li>
              <li className="navbar__link">
                <Link to="">Accessories</Link>
              </li>
            </ul>
          </div>
          <h2 className="navbar__logo">LAMASTORE</h2>
          <div className="navbar__links">
            <div className="navbar__link">
              <Link to="/">Home</Link>
            </div>
            <div className="navbar__link">
              <Link to="about">About</Link>
            </div>
            <div className="navbar__link">
              <Link to="contact">Contact</Link>
            </div>
            <div className="navbar__link">
              <Link to="store">Store</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div className="cart__icon">
                <ShoppingCartOutlinedIcon />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
