import "./App.css";
import Footer from "./components/footer/Footer";
import { Container } from "./components/state/Container";
import { FrameworkContainer } from "./components/main/Content";
import { Input } from "./components/state/Input";

import Navbar from "./components/navbar/Navbar";
import { Clicked } from "./components/state/Clicked";
import { Counter, Counter2 } from "./components/state/Counter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrameworkContainer />
      <Container styles={{ border: "1px solid black", padding: "5px" }} />
      <Input
        value="type"
        handleChange={event => {
          console.log(event.type);
        }}
      />
      <Clicked />
      <Counter />
      <Counter2 />
      <Footer></Footer>
    </div>
  );
}

export default App;
