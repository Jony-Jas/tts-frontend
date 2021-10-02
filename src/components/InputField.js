import React from 'react';
import TextField from "@mui/material/TextField";
import send from "../send.png";

function InputField({ onSubmit }) {
    const [text, setText] = React.useState("");
  const sendData = () => {
    onSubmit(text);
  };
    return (
        <div className="input">
          <TextField
            id="standard-basic"
            label="Enter Your Text Here"
            fullWidth
            variant="standard"
            sx={{ size: "20px" }}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <img src={send} alt="Send" className="send" onClick={sendData} />
        </div>
    )
}

export default InputField
