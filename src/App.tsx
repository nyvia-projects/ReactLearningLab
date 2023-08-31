import "./App.css";
import Footer from "./components/footer/Footer";
import { FrameworkContainer } from "./components/main/Content";
import { Container } from "./components/state/Container";
import { Input } from "./components/state/Input";

import Navbar from "./components/navbar/Navbar";
import { Clicked } from "./components/state/Clicked";
import { Counter1, Counter2 } from "./components/state/Counter";
import { Box1, Box2 } from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import { EngineContextProvider } from "./context/EngineContext";
import { Engine } from "./context/Engine";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter3 } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

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
      <Counter1 />
      <Counter2 />
      <Counter3 message="Count:" />
      <ThemeContextProvider>
        <Box1 />
        <Box2 />
      </ThemeContextProvider>
      <EngineContextProvider>
        <Engine />
      </EngineContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      <Footer></Footer>
    </div>
  );
}

export default App;
