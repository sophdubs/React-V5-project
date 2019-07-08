import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Koko",
  //     animal: "dog",
  //     breed: "Chihuahua"
  //   }),
  //   React.createElement(Pet, { name: "Gypsy", animal: "cat", breed: "Tabby" })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Koko" animal="dog" breed="Chihuahua" />
      <Pet name="Gypsy" animal="cat" breed="Tabby" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
