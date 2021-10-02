import React from "react";
import "./LeftPane.css";
import Wave from "../radio-waves.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));

function LeftPane({ voice, setVoice }) {
  const handleChange = (event) => {
    setVoice(event.target.value);
  };
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <img src={Wave} alt="Wave" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Voice</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={voice}
          label="Choose Voice"
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="../original_audios/nikitha.mp3">Nikitha's Voice</MenuItem>
          <MenuItem value="../original_audios/naveena.mp3">Naveena's Voice</MenuItem>
          <MenuItem value="../original_audios/rachana.mp3">Rachana's Voice</MenuItem>
        </Select>
      </FormControl>
      <div className="instructions">
        <h1 style={{ textAlign: "center", fontSize: 40 }}>Instructions: </h1>
        <ul style={{ fontSize: 20 }}>
          <li>Choose the voice from the dropdown menu</li>
          <li>Type the text you want to convert</li>
          <li>Click the send Button</li>
          <li>Wait for 30sec</li>
          <li>Once, you receive the output play it</li>
          <li>Enjoy!!!</li>
        </ul>
      </div>
      <div className="footer">Soul Cynics</div>
    </div>
  );
}

export default LeftPane;
