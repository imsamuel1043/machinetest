import React from "react";
import "../assets/machine.css";
import profileimg from "../assets/Images/profileimg.jpg";

const Navu = () => {
  return (
    <nav className="navbar">
      <div className="profilecontainer">
        <i className="bi bi-bell-fill bellicon"></i>
        <img src={profileimg} alt="Profile" className="profile" />
        <span className="username">Naja Fathima</span>
      </div>
    </nav>
  );
};

export default Navu;
