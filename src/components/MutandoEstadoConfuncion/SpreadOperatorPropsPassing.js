import React from "react";
import "..//styles/SpreadOpetartorPropsPassing.css";
// =============
// ! NOS ES VALIDO RENDERIZAR OBJETOS DE JAVASCRIPT. , LO CENVERTIMOS EN STRING.  POR DEFECTO LAS PROPS. SON UN OBJETO VACIO.
const Perro = (props) => (
  <div>
    <h1>soy 🐶</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
);
// =============

//! paso el state como propiedad, pero  solo como un objeto de un solo nivel, sino serial dos niveles.

//? React usa OBJECT.ASSIGN para ordenar las propiedades. EL ORDEN  de las props importaran.
class SpreadOperatorProps extends React.Component {
  state = { gato: "🙀", raza: "tropicolo", name: "Odie" };

  render() {
    return (
      <div className="Spread">
        <span>vamos a usar el operador spread para pasar y convinar props</span>
        <Perro name="Soy garfield " Age="3 años " color="red" {...this.state} />
        <h2>Soy un : {this.state.gato}</h2>
      </div>
    );
  }
}

export default SpreadOperatorProps;
