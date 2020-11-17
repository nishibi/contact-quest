import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="avatar"
      />
      <div>
        <p className="name">Megan Sims</p>
        <div className="status">
          <div className="status-online"></div>
          <p className="status-text">Online</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
