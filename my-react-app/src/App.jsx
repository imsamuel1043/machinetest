import React from "react";
import Sidebar from "./components/Sidebar";
import Navu from "./components/Navu";
import Maincontent from "./Components/Maincontent";
import "./assets/machine.css";

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Navu />
        <div className="page-content">
          <Maincontent/>
        </div>
      </div>
    </div>
  );
};

export default App;
