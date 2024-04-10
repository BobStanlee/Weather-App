import "./Header.css";
import searchIcon from "../assets/icon.png";
import menuIcon from "../assets/Vectormenu.png";

const Header = () => {
  return (
    <div className="header">
      <img src={searchIcon} alt="search" className="searchIcon" />
      <img src={menuIcon} alt="menu" className="menuIcon" />
    </div>
  );
};

export default Header;
