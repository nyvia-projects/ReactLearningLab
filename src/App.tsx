import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { FrameworkList } from "./components/main/Content";
import Navbar from "./components/navbar/Navbar";

const COLORS: string[] = [
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "gray",
  "yellow",
  "pink",
  "teal",
  "maroon",
  "cyan",
  "magenta",
  "lime",
  "navy",
  "gold",
  "silver",
  "coral",
  "indigo",
  "lavender",
  "brown",
];

const FRAMEWORKS: string[] = [
  "React",
  "Vue",
  "Angular",
  "Spring",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Express",
  "ASP.NET",
  "Laravel",
  "Meteor",
  "Phoenix",
  "Strapi",
  "Next.js",
  "Nuxt.js",
  "Gatsby",
  "Ember",
  "Svelte",
  "Backbone",
  "Web2py",
];

type FrameworkColorPair = {
  framework: string;
  color: string;
};

function generateRandomPair(): FrameworkColorPair {
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  const randomFramework =
    FRAMEWORKS[Math.floor(Math.random() * FRAMEWORKS.length)];

  return { framework: randomFramework, color: randomColor };
}

function App() {
  const [frameworkColorPairs, setFrameworkColorPairs] = useState<
    FrameworkColorPair[]
  >([]);

  const handleGenerate = () => {
    const newPairs = Array.from({ length: 10 }, () => generateRandomPair());
    setFrameworkColorPairs(newPairs);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div id="main-content">
        <h2>Colored Web Frameworks:</h2>
        <FrameworkList frameworks={frameworkColorPairs} />
        <button onClick={handleGenerate}>Generate Random Frameworks</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
