import React, { useContext } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import randomstring from "randomstring";
import { Context } from "../context/VoiceContext";

function Content() {
  const [voice, setVoice] = React.useState("");
  const { sendreq, addData } = useContext(Context);
  const onSubmit = (data) => {
    if (voice === "") {
      alert("Please choose voice sample");
      return;
    }
    if (data === "") {
      alert("Enter some text");
      return;
    }
    addData(data);
    const obj = {
      id: randomstring.generate(7),
      data,
      sample: voice,
    };
    sendreq(obj);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        padding: 0,
      }}
    >
      <LeftPane voice={voice} setVoice={setVoice} />
      <RightPane onSubmit={onSubmit} />
    </div>
  );
}

export default Content;
