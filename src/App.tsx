import "./App.css";
import Footer from "./components/footer/Footer";
import { FrameworkContainer } from "./components/main/Content";
import { Container } from "./components/learning/state/Container";
import { Input } from "./components/learning/state/Input";

import Navbar from "./components/navbar/Navbar";
import { Clicked } from "./components/learning/state/Clicked";
import { Counter1, Counter2 } from "./components/learning/state/Counter";
import { Box1, Box2 } from "./components/learning/context/Box";
import { ThemeContextProvider } from "./components/learning/context/ThemeContext";
import { EngineContextProvider } from "./components/learning/context/EngineContext";
import { Engine } from "./components/learning/context/Engine";
import { DomRef } from "./components/learning/ref/DomRef";
import { MutableRef } from "./components/learning/ref/MutableRef";
import { Counter3 } from "./components/learning/class/Counter";
import { Private } from "./components/learning/auth/Private";
import { Profile } from "./components/learning/auth/Profile";
import { ListComponent } from "./components/learning/generics/ListComponent";
import { LightbulbContainer } from "./components/learning/restriction/LightbulbContainer";

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
      <ListComponent />
      <LightbulbContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
