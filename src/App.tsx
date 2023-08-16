import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Welcome } from "./components/main/Content";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Nyvio.io</h1>
      <Welcome name="UserX" />
      <Footer></Footer>
    </div>
  );
}

export default App;
