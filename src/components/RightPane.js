import React from "react";
import "./RightPane.css";
import Messages from "./Messages";
import InputField from "./InputField";

function RightPane({ onSubmit }) {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="chat">
        <div className="chatWindow">
          <Messages />
        </div>
        <InputField onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default RightPane;
