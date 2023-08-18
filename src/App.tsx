import "./App.css";
import Footer from "./components/footer/Footer";
import { FrameworkContainer } from "./components/main/Content";
import { Container } from "./components/state/Container";
import { Input } from "./components/state/Input";

import Navbar from "./components/navbar/Navbar";
import { Clicked } from "./components/state/Clicked";
import { Counter, Counter2 } from "./components/state/Counter";
import { Box1, Box2 } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FrameworkContainer />
      <Container
        styles={{
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "gray",
        }}
      />
      <Input
        value="type"
        handleChange={event => {
          console.log(event.type);
        }}
      />
      <Clicked />
      <Counter />
      <Counter2 />
      <ThemeContextProvider>
        <Box1 />
        <Box2 />
      </ThemeContextProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
