import { useState } from "react";
import { Button } from "./Button";
import "./Content.css";
import { FrameworkList } from "./FrameworkList";

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

export const FrameworkContainer = () => {
  const [frameworkColorPairs, setFrameworkColorPairs] = useState<
    FrameworkColorPair[]
  >([]);

  const handleGenerate = () => {
    const newPairs = Array.from({ length: 10 }, () => generateRandomPair());
    setFrameworkColorPairs(newPairs);
  };
  return (
    <div id="framework-container">
      <h2>Colored Web Frameworks:</h2>
      <FrameworkList frameworks={frameworkColorPairs} />
      <Button
        handleClick={event => {
          handleGenerate();
          console.log(event.type);
        }}
      />
    </div>
  );
};
