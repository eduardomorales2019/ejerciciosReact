import React from "react";
import "./styles/ComponentehijoAPadre.css";
// componente hijo
class Hijo extends React.Component {
  state: {};
  // para pasar informacion del hijo al padre seria de la siguiente manera.
  manejadorclick = () => {
    this.props.onSaludar("ninja props");
  };

  render() {
    return (
      <div className="Hijo">
        <h1>Soy hijo </h1>
        {/* ESTO CUANDO VIENE DEL PADRE AL HIJO  CON  PROPS */}
        {/* <button onClick={this.props.onSaludar}>push</button> */}
        {/* ESTO CUANDO VIENE DEL HIJO AL PADRR */}
        {/* <button onClick={() => this.props.onSaludar("info del hijo al padre")}> */}
        <button onClick={this.manejadorclick}>push</button>
      </div>
    );
  }
}
//! COMPONENTE CON EVENTO PERSONALIZADO. ON SALUDAR.
class ComponentePadre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataHijo: "" };

    this.manejador = this.manejador.bind(this);
  }
  manejador = (dataHijo) => {
    // alert(dataHijo);
    this.setState({ dataHijo: dataHijo });
  };

  render() {
    return (
      <div>
        <p>
          En este componene estoy pasando un evento personalizado entre padre e
          hijo, primero de hijo a padre mediante props, y despues de hijo a
          padre mediante informacion que de un metodo que tiene propiedades.{" "}
        </p>
        <div className="Padre">
          <p>soy data : {this.state.dataHijo}</p>
          <Hijo onSaludar={this.manejador} />
        </div>
      </div>
    );
  }
}

export default ComponentePadre;
