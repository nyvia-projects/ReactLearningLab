import "./App.css";
import Footer from "./components/footer/Footer";
import { Container } from "./components/main/Container";
import { FrameworkContainer } from "./components/main/Content";
import { Input } from "./components/main/Input";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrameworkContainer />
      <Input
        value="type"
        handleChange={event => {
          console.log(event.type);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "5px" }} />
      <Footer></Footer>
    </div>
  );
}

export default App;
