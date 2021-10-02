import "./App.css";
import Container from "@mui/material/Container";
import Content from "./components/Content";


function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <div className="header">
          <h1>Text to Speech</h1>
        </div>
        <div className="card">
          <Content />
        </div>
      </Container>
    </div>
  );
}

export default App;
