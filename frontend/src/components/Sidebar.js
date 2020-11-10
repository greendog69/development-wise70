import React from "react";
import "./stylesheets/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVartIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={process.env.PUBLIC_URL+"/me.jpg"} />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVartIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat
          group_name="Developer Group"
          last_seen_message="We are good. How about you?"
        />
        <SidebarChat
          group_name="DevOps Group"
          last_seen_message="What's next"
        />
        <SidebarChat
          group_name="Designer Group"
          last_seen_message="let's meet tomorrow"
        />
      </div>
    </div>
  );
}

export default Sidebar;
