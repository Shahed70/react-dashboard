
import Sidebar from "./Sidebar/Sidebar";
import PageHolder from "./pages/PageHolder";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
function App() {
  const [sidebar, setSiebar] = useState(true);
  const showSidebar = () => setSiebar(!sidebar);
  return (
    <>
      <Router>
        <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
        <PageHolder sidebar={sidebar} style={{background:"red"}} /> 
      </Router>
    </>
  );
}

export default App;
