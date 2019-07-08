const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
