import React from "react";
import randomstring from "randomstring";
import { Context } from "../context/VoiceContext";

function useData({ voice}) {
  const { sendreq, addData } = React.useContext(Context);
  const onSubmit = (data) => {
    console.log(voice);
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
  return [onSubmit];
}

export default useData;
