import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Koko",
      animal: "dog",
      breed: "Chihuahua"
    }),
    React.createElement(Pet, { name: "Gypsy", animal: "cat", breed: "Tabby" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
