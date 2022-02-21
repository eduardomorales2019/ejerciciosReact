// utiliza metodos nativos. arrays con strings, array objetos.  realizar compocicion basada en itracion !  crear el componente iterando <p>......</p>

// extraer datos.  que ocurrio en esta iteracio . y usar el key!

import React from "react";
import "./iteracion.css";

import { v4 as uuidv4 } from "uuid";
let frutas = ["manzana", "banana", "fresa", "platano"];

class Iteracion extends React.Component {
  state = { id: uuidv4() };
  render() {
    return (
      <div className="container ">
        <h2>
          {frutas.map((fruta, index) => {
            return <p key={index}>{fruta} </p>;
          })}
        </h2>
      </div>
    );
  }
}

export default Iteracion;
