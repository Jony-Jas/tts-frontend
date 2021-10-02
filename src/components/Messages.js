import React, { useContext } from "react";
import "./Messages.css";
import PulseLoader from "react-spinners/PulseLoader";
import ReactAudioPlayer from "react-audio-player";
import { Context } from "../context/VoiceContext";

function Messages() {
  const { state } = useContext(Context);
  console.log(state);
  const messages = state.map((message) => {
    if (message.data === "") {
      return null;
    } else {
      return (
        <div key={message.voice}>
          <div className="msg">
            <span>{message.data}</span>
          </div>
          {(() => {
            return message.voice === "Loading" ? (
              <PulseLoader color={"#368080"} size={15} />
            ) : (
              <ReactAudioPlayer
                src={`http://localhost:3002/audio/${message.voice}`}
                controls
                autoPlay
              />
            );
          })()}
        </div>
      );
    }
  });
  return <>{messages}</>;
}

export default Messages;
