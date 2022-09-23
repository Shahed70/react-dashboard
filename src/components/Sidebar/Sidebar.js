import Header from "./Header";
import MyNavs from "./MyNavs.js";
import "./Sidebar.css";
const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <Header  sidebar={sidebar} showSidebar={showSidebar} />
      <MyNavs sidebar={sidebar} showSidebar={showSidebar}/>
    </>
  );
};

export default Sidebar;
