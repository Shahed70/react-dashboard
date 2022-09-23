import { Link } from "react-router-dom";
import { sideBarData } from "./SidebarData";
import "./Sidebar.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Navs = ({ sidebar, showSidebar }) => {
  return (
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
      <Link className="menu-bars" to="#">
        {sidebar ? (
          <FaArrowCircleLeft className="hamburger" onClick={showSidebar} />
        ) : (
          <FaArrowCircleRight className="hamburger" onClick={showSidebar} />
        )}
      </Link>
      <ul className="nav-menu-items">
        {sideBarData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className={item.cName}>
                 <span className="navIcon">  {item.icon}</span>
                <span className="navTitle">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navs;
