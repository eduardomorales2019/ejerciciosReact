import React from "react";
import "./styles/PertinenciaEventoReact.css";

class PertinenciaEventosReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
    this.handlerEvent = this.handlerEvent.bind(this);
  }

  handlerEvent = (event) => {
    const evento = event.target.value;
    //? esta es una forma
    // this.setState({ color: event.target.value });
    //? esta es otra
    this.setState((state) => ({
      color: evento,
    }));
  };

  render() {
    const estilos = {
      color: "red",
    };
    return (
      <div className="estiloss">
        <input type="text" onChange={this.handlerEvent}></input>
        <p style={this.state}>input:{this.state.color} </p>
      </div>
    );
  }
}

export default PertinenciaEventosReact;
