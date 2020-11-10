import React from "react";
import "./stylesheets/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ group_name, last_seen_message }) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>{group_name}</h2>
        <p>{last_seen_message}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
