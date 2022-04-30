const Pet = ({ name, species, breed}) => React.createElement(
  'div',
  {},
  [
    React.createElement('h1', {key: 1}, name),
    React.createElement('h2', {key: 2}, species),
    React.createElement('h2', {key: 3}, breed),
  ]
)

const App = ({ sarasa }) =>
  React.createElement(
    "div",
    { className: "app" },
    React.createElement("h1", { className: "title" }, `Adopt Me ${sarasa}!`),
    React.createElement(Pet, {name: 'Fidel', species: 'Dog', breed: 'Dog', key: 1}),
    React.createElement(Pet, {name: 'Cleo', species: 'Dog', breed: 'Golden', key: 2}),
    React.createElement(Pet, {name: 'Miyu', species: 'Cat', breed: 'Mix', key: 3}),
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, { sarasa: "sarasa" }));
