import React from "react";
import "./style.css";

function Contact(props) {
  var nameClass = "";
  var text = "";
  if (props.user.online) {
    var nameClass = "status-online";
    var text = "Online";
  } else {
    var nameClass = "status-offline";
    var text = "Offline";
  }
  return (
    <div className="Contact">
      <img className="avatar" src={props.user.img} alt="avatar" />
      <div>
        <p className="name">{props.user.name}</p>
        <div className="status">
          <div className={nameClass}></div>
          <p className="status-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
