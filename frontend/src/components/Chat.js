import React, { useState } from "react";
import "./stylesheets/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlineIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
// import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    // await axios.post("/api/v1/messages/new", {
    //   message: input,
    //   name: "Mehade",
    //   timestamp: "Just now!",
    //   received: false,
    // });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Developer Group</h3>
          <p>{new Date().toDateString()}</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlineIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {/* {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{new Date().toDateString()}</span>
          </p>
        ))} */}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
