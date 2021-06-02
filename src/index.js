// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from "./Components/App";

// const jsx = <h1>Hello, Platzi Badges!</h1>;

// const element = React.createElement('a', {href:'https://platzi.com/'}, 'Ir a Platzi');

// const name = 'Juan Uribe';
// // const element = React.createElement('h1', {}, 'Hola, Soy ${name}');

// const sum = () => 3+3;
// const jsx = <h1>Hola, soy {name}</h1>;

// const jsx = <div>
//     <h1>Hola,Soy Juan Pablo</h1>
//     <p>Ingeniero Frontend!!</p>
// </div>

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
/* ReactDOM.render(
  <Badge
    firtsName="Juan P."
    lastName="Uribe"
    jobTitle="Desarrollo Frontend y un poco de Backend"
    twitterAccount="juanpur2"
    avatarURL="https://www.gravatar.com/avatar?d=identicon"
  />,
  container
); */

ReactDOM.render(<App />, container);
