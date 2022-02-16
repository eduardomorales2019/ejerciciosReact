import React from "react";
import "./MutateFunction.css";
// SET STATE ES ASYNCRONO YA QUE NO CAMBIA AUTOMATICAMENTE, para valiudar si otros componenetes mutaron el estdo y actualizaron al mismo tiempo!!! se van agrupando..  en cola de motor, asi que podemos hacer  una forma especial de sintaxis para quitarnos ese problema de rendimiento en cado de tener muchos  componentes.

class MutateFunction extends React.Component {
  state = {
    titulo: "super Trabajo",
    cantidad: 0,
    click: 0,
  };

  agregar = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  //! ESTE METODO ES LA FORMA DE  QUITARNOS EL PROBLEMA DE  MENCIONADO ARRIBA, EN CASO DE QUE ACCEDAMOS AL VALOR DE LAS PROPS O DEL ESTADO EN ALGUN OTRO COMPONENTE

  // 1. pasa un funcion a SETSTATE en lugar de  un objeto. , con el ESTADO  actual que es lo que esperamos y despues pasale LAS PROPS

  //2. prevState, es el estado previo a la mutacion que queremos realizar .
  add = () => {
    this.setState((prevstate, props) => {
      return { click: prevstate.click + 1 };
    });
  };

  render() {
    return (
      <div className="contador">
        <h1>{this.state.title}</h1>
        <button onClick={this.agregar}>
          Contador de clicks
          <p>{this.state.cantidad} agregar</p>
        </button>
        <button onClick={this.add}>
          Contador de clicks
          <p>{this.state.click} add</p>
        </button>
      </div>
    );
  }
}

export default MutateFunction;
